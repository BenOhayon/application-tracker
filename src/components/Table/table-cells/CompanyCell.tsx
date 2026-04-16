import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import styled from 'styled-components'
import CompanyImageBox from '../../CompanyImageBox/CompanyImageBox'

const CompanyCellContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const CompanyName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`

const CompanyCell = ({ getValue }: CellContext<ApplicationData, ApplicationData['company']>) => {
  const companyName = getValue();
  const companyInitials = companyName.slice(0, 2).toUpperCase();

  return (
    <CompanyCellContainer>
      <CompanyImageBox companyInitials={companyInitials} />
      <CompanyName>{companyName}</CompanyName>
    </CompanyCellContainer>
  )
}

export default CompanyCell
