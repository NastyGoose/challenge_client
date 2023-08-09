import React, { type ReactElement } from 'react'

import { Box, FormGroup } from '@mui/material'
import FormCheckbox from '../../../components/forms/checkbox'

import { UserInfoField } from '../../../common/validation-schemas/user-info-schema'
import { Coverage } from '@/App'

const Coverages: React.FC = (): ReactElement => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      background: 'gainsboro',
      padding: '8px'
    }}>
      Coverages
      <FormGroup sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <FormCheckbox label="Bonus protection" value={Coverage.BonusProtection} fieldKey={UserInfoField.COVERAGES} />
        <FormCheckbox label="AO+" value={Coverage.AOPlus} fieldKey={UserInfoField.COVERAGES} />
        <FormCheckbox label="Glass Coverage" value={Coverage.GlassCoverage} fieldKey={UserInfoField.COVERAGES} />
      </FormGroup>
    </Box>
  )
}

export default Coverages
