import React, { type ReactElement } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox, FormControlLabel } from '@mui/material'

import { type UserInfoField } from '../../../common/validation-schemas/user-info-schema'
import { type Coverage, type Discount } from '@/App'

interface FormCheckboxProps {
  fieldKey: UserInfoField.COVERAGES | UserInfoField.DISCOUNTS_AND_SURCHARGES
  value: Discount | Coverage
  label: string
  disabled?: boolean
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  fieldKey,
  label,
  value,
  disabled = false
}): ReactElement => {
  const { watch, setValue } = useFormContext()

  const fieldValue: Array<Discount | Coverage> = watch(fieldKey)

  const onCheckboxClick = (): void => {
    if (!disabled) {
      if (fieldValue.includes(value)) {
        setValue(
          fieldKey,
          fieldValue.filter((item: Discount | Coverage) => item !== value)
        )
      } else {
        setValue(fieldKey, [...fieldValue, value])
      }
    }
  }

  return (
    <FormControlLabel
      disabled={disabled}
      control={
        <Checkbox
          onChange={onCheckboxClick}
          checked={fieldValue.includes(value)}
        />
      }
      label={label}
    />
  )
}

export default FormCheckbox
