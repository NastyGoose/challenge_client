import { type UserInfoFormBody } from '@/App'
import axios from 'axios'

export interface PriceDescription {
  totalPrice: number
  discountAndSurcharges: Array<{ name: string, value: number }>
  coverages: Array<{ name: string, value: number }>
}

// TODO: Server URL should be put into ENV
const userInfoUrl = 'http://localhost:3000/user'

const addUserInfo = async (body: UserInfoFormBody): Promise<PriceDescription> => {
  const result = await axios.post(userInfoUrl,
    body
  )

  return result.data
}

export {
  addUserInfo
}
