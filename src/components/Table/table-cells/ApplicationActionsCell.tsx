import type { CellContext } from '@tanstack/react-table'
import type { ApplicationData } from '../../../utils/types'
import ApplicationActions from '../../ApplicationActions/ApplicationActions'

const ApplicationActionsCell = ({ row }: CellContext<ApplicationData, unknown>) => {
  const { company, id } = row.original;

  return (
    <ApplicationActions 
      applicationCompany={company}
      applicationId={id}
    />
  )
}

export default ApplicationActionsCell
