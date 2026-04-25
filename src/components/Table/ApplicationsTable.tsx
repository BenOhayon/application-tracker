import React from 'react'
import Table from './Table'
import { applicationsColumnDef } from '../../utils/application-table-column-def';
import ApplicationTableEmptyState from '../empty-states/ApplicationTableEmptyState/ApplicationTableEmptyState';
import Checkbox from '../Checkbox/Checkbox';
import type { ApplicationData } from '../../utils/types';
import { useSetShowRejectedApplications } from '../../model/stores/applications-table-store';

interface ApplicationTableProps {
  title?: string;
  maxVisibleEntries?: number;
  hasFilters?: boolean;
  data: ApplicationData[];
  shouldShowRejectedApplications: boolean;
  itemsPerPage: number;
}

const ApplicationsTable: React.FC<ApplicationTableProps> = ({ 
  title, 
  maxVisibleEntries, 
  hasFilters,
  data, 
  shouldShowRejectedApplications, 
  itemsPerPage,
 }) => {
  const setShowRejectedApplications = useSetShowRejectedApplications();

  return (
    <Table 
      {...(title && { title })}
      {...(
        hasFilters && { filters: <Checkbox 
          label='Show rejected applications'
          isChecked={shouldShowRejectedApplications}
          onChecked={(showRejected: boolean) => setShowRejectedApplications(showRejected)} 
        /> 
      })}
      data={data} 
      columns={applicationsColumnDef} 
      itemsPerPage={itemsPerPage}
      emptyState={<ApplicationTableEmptyState />}
      maxVisibleEntries={maxVisibleEntries}
    />
  )
}

export default ApplicationsTable;
