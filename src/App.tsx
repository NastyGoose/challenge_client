import React, { type ReactElement } from 'react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import InsurancePage from './pages/insurance-page'

import {
  type UserInfoField
} from './common/validation-schemas/user-info-schema'

export interface UserInfoFormBody {
  [UserInfoField.NAME]: string
  [UserInfoField.BIRTHDAY]: string
  [UserInfoField.CITY]: string
  [UserInfoField.VEHICLE_POWER]: number
  [UserInfoField.VOUCHER]?: number
  [UserInfoField.PRICE_MATCH]?: number
}

export enum Discount {
  Commercial = 'commercial',
  Agents = 'agents',
  Summer = 'summer',
  StrongCar = 'strong_car'
}

export enum Coverage {
  BonusProtection = 'bonus_protection',
  AOPlus = 'ao_plus',
  GlassCoverage = 'glass_coverage'
}

const App: React.FC = (): ReactElement => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
     <InsurancePage />
    </QueryClientProvider>
  )
}

export default App
