import React from 'react'
import { useIsMobile } from '../../hooks/is-mobile'
import MobileApplicationsList from '../../components/MobileApplicationsList/MobileApplicationsList'
import ApplicationsTable from '../../components/Table/ApplicationsTable'
import type { ApplicationData } from '../../utils/types'
import { useItemsPerPage, useShowRejectedApplications } from '../../model/stores/applications-table-store'
import { useApplications } from '../../model/stores/applications-store'

interface ApplicationsDataDisplayProps {
  title?: string;
  hasTableFilters?: boolean;
  maxVisibleEntries?: number;
  applications: ApplicationData[];
  shouldShowRejectedApplications: boolean;
  itemsPerPage: number;
}

const ApplicationsDataDisplay: React.FC<ApplicationsDataDisplayProps> = ({
  title,
  hasTableFilters = true,
  maxVisibleEntries,
  applications,
  shouldShowRejectedApplications,
  itemsPerPage,
}) => {
  const activeApplications = applications.filter(application => !application.disabled);
  const filteredApplications = !hasTableFilters ? applications : shouldShowRejectedApplications ? applications : activeApplications;
  const isMobile = useIsMobile();

  if (maxVisibleEntries) {
    applications = applications.slice(0, maxVisibleEntries)
  }

  return (
    <>
      {
        isMobile ? (
          <MobileApplicationsList 
            title={title} 
            count={filteredApplications.length} 
            data={filteredApplications} 
            hasFilters={hasTableFilters}
          />
        ) : (
          <ApplicationsTable
            data={filteredApplications}
            title={title}
            hasFilters={hasTableFilters}
            maxVisibleEntries={maxVisibleEntries} 
            itemsPerPage={itemsPerPage}
          />
        )
      }
    </>
  )
}

const WithStoreConnection: React.FC<Pick<ApplicationsDataDisplayProps, 'title' | 'maxVisibleEntries' | 'hasTableFilters'>> = ({
  title,
  maxVisibleEntries, 
  hasTableFilters = true,
}) => {
  const applications = useApplications();
  const itemsPerPage = useItemsPerPage();
  const shouldShowRejectedApplications = useShowRejectedApplications();

  return <ApplicationsDataDisplay 
    title={title} 
    maxVisibleEntries={maxVisibleEntries} 
    hasTableFilters={hasTableFilters}
    applications={applications}
    itemsPerPage={itemsPerPage}
    shouldShowRejectedApplications={shouldShowRejectedApplications}
  />
}


export default WithStoreConnection
