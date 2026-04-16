import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #4B5563;
`

const TextCell = ({ getValue }: CellContext<ApplicationData, ApplicationData['role'] | ApplicationData['hybridness']>) => {
  const value = getValue();

  return (
    <Text>{value}</Text>
  )
}

export default TextCell
