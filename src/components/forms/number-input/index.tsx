import React, { type ReactElement } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel
} from '@mui/material'

const FormNumberInput: React.FC<{
  label: string
  fieldKey: string
  startAdornment?: string
  required?: boolean
}> = ({ label, fieldKey, startAdornment }): ReactElement => {
  const {
    register
  } = useFormContext()

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel>{label}</InputLabel>
      <Input
        {...register(fieldKey)}
        type="number"
        startAdornment={<InputAdornment position="start">{startAdornment}</InputAdornment>}
      />
    </FormControl>
  )
}

export default FormNumberInput
