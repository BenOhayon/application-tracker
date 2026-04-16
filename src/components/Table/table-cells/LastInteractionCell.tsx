import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import styled from 'styled-components'
import { formatRelativeTime } from '../../../utils/dateUtils'

const LastInteractionCellContainer = styled.div`
  font-size: 14px;
  color: #6B7280;
`

const LastInteractionCell = ({ getValue }: CellContext<ApplicationData, ApplicationData['lastInteraction']>) => {
  const lastInteractionDate = new Date(getValue());
  return (
    <LastInteractionCellContainer>{formatRelativeTime(lastInteractionDate)}</LastInteractionCellContainer>
  )
}

export default LastInteractionCell
