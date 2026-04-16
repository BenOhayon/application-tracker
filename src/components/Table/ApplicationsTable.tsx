import React from 'react'
import Table from './Table'
import { applicationsColumnDef } from '../../utils/application-table-column-def';
import ApplicationTableEmptyState from '../empty-states/ApplicationTableEmptyState/ApplicationTableEmptyState';
import { useAppDispatch, useAppSelector } from '../../model/stores/store-hooks';
import Checkbox from '../Checkbox/Checkbox';
import { setShowRejectedApplications } from '../../model/stores/applications-table-slice';
import type { ApplicationData } from '../../utils/types';

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
  const dispatch = useAppDispatch();

  return (
    <Table 
      {...(title && { title })}
      {...(
        hasFilters && { filters: <Checkbox 
          label='Show rejected applications'
          isChecked={shouldShowRejectedApplications}
          onChecked={(showRejected: boolean) => dispatch(setShowRejectedApplications(showRejected))} 
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

const WithStoreConnection: React.FC<Pick<ApplicationTableProps, 'title' | 'maxVisibleEntries' | 'hasFilters'>> = ({
  title, 
  maxVisibleEntries, 
  hasFilters = true,
}) => {
  const allApplications = useAppSelector(state => state.applications.applications);
  const itemsPerPage = useAppSelector(state => state.applicationsTable.itemsPerPage);
  const shouldShowRejectedApplications = useAppSelector(state => state.applicationsTable.showRejectedApplications);
  const activeApplications = allApplications.filter(application => !application.disabled);
  const filteredApplications = !hasFilters ? allApplications : shouldShowRejectedApplications ? allApplications : activeApplications;

  return <ApplicationsTable 
    title={title} 
    maxVisibleEntries={maxVisibleEntries} 
    hasFilters={hasFilters}
    data={filteredApplications}
    itemsPerPage={itemsPerPage}
    shouldShowRejectedApplications={shouldShowRejectedApplications}
  />
}

export default WithStoreConnection
