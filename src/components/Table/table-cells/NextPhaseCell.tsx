import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import { PhaseCellContainer, PhaseCellValue } from './table-cells-styled-components';

const NextPhaseCell = ({ row, getValue }: CellContext<ApplicationData, ApplicationData['nextPhase']>) => {
  const phase = getValue();

  if (phase === null || row.original.disabled) return;

  return (
    <PhaseCellContainer>
      <PhaseCellValue>{phase}</PhaseCellValue>
    </PhaseCellContainer>
  )
}

export default NextPhaseCell
