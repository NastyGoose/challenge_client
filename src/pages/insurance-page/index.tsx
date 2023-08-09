import React, { useState, type ReactElement } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { format } from 'date-fns'
import { yupResolver } from '@hookform/resolvers/yup'

import Discounts from './discounts'
import Coverages from './coverages'
import UserData from './user-data'

import { Box } from '@mui/material'

import {
  UserInfoField,
  userInfoValidationSchema
} from '@/common/validation-schemas/user-info-schema'

import { type PriceDescription, addUserInfo } from '@/api/user-info'
import { Discount } from '@/App'

export interface UserInfoFormBody {
  [UserInfoField.NAME]: string
  [UserInfoField.BIRTHDAY]: string
  [UserInfoField.CITY]: string
  [UserInfoField.VEHICLE_POWER]: number
  [UserInfoField.VOUCHER]?: number
  [UserInfoField.PRICE_MATCH]?: number
}

const App: React.FC = (): ReactElement => {
  const [priceDetails, setPriceDetails] = useState<PriceDescription>({
    totalPrice: 0,
    discountAndSurcharges: [],
    coverages: []
  })

  const formProps = useForm({
    resolver: yupResolver(userInfoValidationSchema),
    shouldUseNativeValidation: false,
    reValidateMode: 'onSubmit',
    defaultValues: {
      [UserInfoField.NAME]: undefined,
      [UserInfoField.BIRTHDAY]: format(new Date(), 'yyyy-dd-MM'),
      [UserInfoField.CITY]: undefined,
      [UserInfoField.VEHICLE_POWER]: undefined,
      [UserInfoField.VOUCHER]: 0,
      [UserInfoField.PRICE_MATCH]: 0,

      [UserInfoField.COVERAGES]: [],
      [UserInfoField.DISCOUNTS_AND_SURCHARGES]: [Discount.StrongCar]
    }
  })

  console.log(formProps.getValues())

  const { mutateAsync } = useMutation(
    ['ADD_USER_INFO'],
    async (data: UserInfoFormBody) => {
      const res = await addUserInfo(data)

      setPriceDetails(res)
    }
  )

  const onSubmit = async (data: UserInfoFormBody): Promise<void> => {
    await mutateAsync(data)
  }

  return (
    <FormProvider {...formProps}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100%',
          minWidth: '80%',
          maxWidth: '80%',
          margin: 'auto',
          flexDirection: 'column'
        }}
      >
        <form
          noValidate
          onSubmit={formProps.handleSubmit(onSubmit, (data, data1) => {
            console.log('invalid', data, data1)
          })}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Discounts price={priceDetails.totalPrice} />
            <Box
              sx={{
                display: 'flex',
                gap: '16px'
              }}
            >
              <UserData />
              <Coverages />
            </Box>
          </Box>
        </form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: '100%',
            gap: '8px'
          }}
        >
          <div>Total Price: {priceDetails.totalPrice.toFixed(2)} EUR</div>
          <div>
            Discount and Surcharges:{' '}
            {priceDetails.discountAndSurcharges.map((item, index) => {
              return (
                <p key={`${item.name}-${index}`}>
                  {item.name} - {item.value.toFixed(2)} EUR
                </p>
              )
            })}
          </div>
          <div>
            Coverages:{' '}
            {priceDetails.coverages.map((item, index) => {
              return (
                <p key={`${item.name}-${index}`}>
                  {item.name} - {item.value.toFixed(2)} EUR
                </p>
              )
            })}
          </div>
        </Box>
      </Box>
    </FormProvider>
  )
}

export default App
