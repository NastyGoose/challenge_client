import React, { type SyntheticEvent, type ReactElement } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  TextField, type TextFieldProps
} from '@mui/material'

const FormTextfield: React.FC<{
  required?: boolean
  label: string
  fieldKey: string
  type?: TextFieldProps['type']
}> = ({ required = false, label, fieldKey, type = 'text' }): ReactElement => {
  const { register, watch, setValue, formState: { errors } } = useFormContext()

  const error = errors[fieldKey]

  const fieldValue = watch(fieldKey)

  const onChange = (e: SyntheticEvent): void => {
    setValue(fieldKey, (e.target as HTMLInputElement).value)
  }

  return (
      <TextField
        {...register(fieldKey)}
        label={label}
        value={fieldValue}
        required={required}
        type={type}
        onChange={onChange}
        error={!(error == null)}
        helperText={(error?.message ?? '') as string}
      />
  )
}

export default FormTextfield
