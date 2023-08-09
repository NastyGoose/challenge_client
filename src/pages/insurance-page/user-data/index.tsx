import React, { type ReactElement } from 'react'

import {
  Box,
  Button
} from '@mui/material'
import FormTextfield from '../../../components/forms/textfield'
import { UserInfoField } from '../../../common/validation-schemas/user-info-schema'
import FormNumberInput from '@/components/forms/number-input'

const UserData: React.FC = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        gap: '12px',
        padding: '8px'
      }}
    >
      User Data
      <FormTextfield required fieldKey={UserInfoField.NAME} label='Name' />
      <FormTextfield type="date" required fieldKey={UserInfoField.BIRTHDAY} label='Birthday' />
      <FormTextfield required fieldKey={UserInfoField.CITY} label='City' />
      <FormTextfield required fieldKey={UserInfoField.VEHICLE_POWER} label='Vehicle power' />
      <FormNumberInput label='Voucher' fieldKey={UserInfoField.VOUCHER} startAdornment='€' />
      <FormNumberInput label='Price Match' fieldKey={UserInfoField.PRICE_MATCH} startAdornment='€' />
      <Button type="submit" variant="text">
        Save
      </Button>
    </Box>
  )
}

export default UserData
