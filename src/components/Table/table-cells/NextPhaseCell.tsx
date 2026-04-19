import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import { PhaseCellContainer, PhaseCellValue } from './table-cells-styled-components';

const NextPhaseCell = ({ getValue }: CellContext<ApplicationData, ApplicationData['nextPhase']>) => {
  const phase = getValue();

  return (
    <PhaseCellContainer>
      <PhaseCellValue>{phase ?? 'Unknown'}</PhaseCellValue>
    </PhaseCellContainer>
  )
}

export default NextPhaseCell
