import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import { PhaseCellContainer, PhaseCellValue } from './table-cells-styled-components';

const LastPhaseCell = ({ row, getValue }: CellContext<ApplicationData, ApplicationData['lastPhase']>) => {
  const phase = getValue();
  const isRejected = row.original.disabled;

  return (
    <PhaseCellContainer>
      <PhaseCellValue>{isRejected ? 'Rejected' : phase}</PhaseCellValue>
    </PhaseCellContainer>
  )
}

export default LastPhaseCell
