import * as yup from 'yup'

export enum UserInfoField {
  COVERAGES = 'coverages',
  DISCOUNTS_AND_SURCHARGES = 'discountAndSurcharges',

  BIRTHDAY = 'birthday',
  CITY = 'city',
  NAME = 'name',
  VEHICLE_POWER = 'vehiclePower',

  PRICE_MATCH = 'priceMatch',
  VOUCHER = 'voucher',
}

enum ERROR_MESSAGES {
  REQUIRED = 'This is required value',
  NUMBER = 'Value should be number'
}

const userInfoValidationSchema = yup
  .object()
  .shape({
    [UserInfoField.NAME]: yup.string().required(ERROR_MESSAGES.REQUIRED),
    [UserInfoField.BIRTHDAY]: yup.string().required(ERROR_MESSAGES.REQUIRED),
    [UserInfoField.CITY]: yup.string().required(ERROR_MESSAGES.REQUIRED),
    [UserInfoField.VEHICLE_POWER]: yup.number().required(ERROR_MESSAGES.REQUIRED).typeError(ERROR_MESSAGES.NUMBER),
    [UserInfoField.PRICE_MATCH]: yup.number().typeError(ERROR_MESSAGES.NUMBER),
    [UserInfoField.VOUCHER]: yup.number().typeError(ERROR_MESSAGES.NUMBER),

    [UserInfoField.DISCOUNTS_AND_SURCHARGES]: yup.array(
      yup.string()
    ),
    [UserInfoField.COVERAGES]: yup.array(
      yup.string()
    )
  })
  .required()

export {
  userInfoValidationSchema
}
