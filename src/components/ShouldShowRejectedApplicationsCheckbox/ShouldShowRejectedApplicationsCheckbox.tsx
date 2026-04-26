import React from 'react'
import Checkbox from '../Checkbox/Checkbox';
import { useSetShowRejectedApplications, useShowRejectedApplications } from '../../model/stores/applications-table-store';

const ShouldShowRejectedApplicationsCheckbox: React.FC = () => {
  const shouldShowRejectedApplications = useShowRejectedApplications();
  const setShowRejectedApplications = useSetShowRejectedApplications();

  return (
    <Checkbox 
      label='Show rejected applications'
      isChecked={shouldShowRejectedApplications}
      onChecked={(showRejected: boolean) => setShowRejectedApplications(showRejected)} 
    /> 
  )
}

export default ShouldShowRejectedApplicationsCheckbox
