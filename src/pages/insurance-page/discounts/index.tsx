import React, { type ReactElement } from 'react'

import { Box, FormGroup } from '@mui/material'
import FormCheckbox from '@/components/forms/checkbox'
import { UserInfoField } from '@/common/validation-schemas/user-info-schema'
import { Discount } from '@/App'

const Discounts: React.FC<{ price: number }> = ({ price }): ReactElement => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      background: 'gainsboro',
      padding: '8px'
    }}>
      <FormGroup sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: '8px'
      }}>
        <FormCheckbox label='Commercial discount' fieldKey={UserInfoField.DISCOUNTS_AND_SURCHARGES} value={Discount.Commercial} />
        <FormCheckbox label='Agents discount' fieldKey={UserInfoField.DISCOUNTS_AND_SURCHARGES} value={Discount.Agents} />
        <FormCheckbox label='Summer discount' fieldKey={UserInfoField.DISCOUNTS_AND_SURCHARGES} value={Discount.Summer} />
        <FormCheckbox disabled label='Strong car surcharge' fieldKey={UserInfoField.DISCOUNTS_AND_SURCHARGES} value={Discount.StrongCar} />
      </FormGroup>
      Total price: {price.toFixed(2)}
    </Box>
  )
}

export default Discounts
