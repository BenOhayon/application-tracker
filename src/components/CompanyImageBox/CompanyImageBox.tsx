import React from 'react'
import styled from 'styled-components'
import { generateRandomColor } from '../../utils/random-color-generator';

interface CompanyImageBoxProps {
  companyInitials: string;
}

const CompanyCellIntials = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: ${props => props.color};
  color: white;
  padding: 5px;
  font-weight: 600;
`

const CompanyImageBox: React.FC<CompanyImageBoxProps> = ({ companyInitials }) => {
  const generatedColor = generateRandomColor();
  
  return (
    <CompanyCellIntials color={generatedColor}>
      {companyInitials}
    </CompanyCellIntials>
  )
}

export default CompanyImageBox
