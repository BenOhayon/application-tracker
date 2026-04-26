import React from 'react'
import Table from './Table'
import { applicationsColumnDef } from '../../utils/application-table-column-def';
import ApplicationTableEmptyState from '../empty-states/ApplicationTableEmptyState/ApplicationTableEmptyState';
import type { ApplicationData } from '../../utils/types';
import ShouldShowRejectedApplicationsCheckbox from '../ShouldShowRejectedApplicationsCheckbox/ShouldShowRejectedApplicationsCheckbox';

interface ApplicationTableProps {
  title?: string;
  maxVisibleEntries?: number;
  hasFilters?: boolean;
  data: ApplicationData[];
  itemsPerPage: number;
}

const ApplicationsTable: React.FC<ApplicationTableProps> = ({ 
  title, 
  maxVisibleEntries, 
  hasFilters,
  data, 
  itemsPerPage,
 }) => {
  return (
    <Table 
      {...(title && { title })}
      {...(hasFilters && { filters: <ShouldShowRejectedApplicationsCheckbox /> })}
      data={data} 
      columns={applicationsColumnDef} 
      itemsPerPage={itemsPerPage}
      emptyState={<ApplicationTableEmptyState />}
      maxVisibleEntries={maxVisibleEntries}
    />
  )
}

export default ApplicationsTable;
