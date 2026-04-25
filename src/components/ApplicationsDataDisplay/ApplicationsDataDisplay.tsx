import React from 'react'
import { useIsMobile } from '../../hooks/is-mobile'
import MobileApplicationsList from '../../components/MobileApplicationsList/MobileApplicationsList'
import ApplicationsTable from '../../components/Table/ApplicationsTable'
import { useAppSelector } from '../../model/stores/store-hooks'
import type { ApplicationData } from '../../utils/types'
import { useItemsPerPage, useShowRejectedApplications } from '../../model/stores/applications-table-store'

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
            count={activeApplications.length} 
            data={activeApplications} 
          />
        ) : (
          <ApplicationsTable
            data={filteredApplications}
            title={title}
            hasFilters={hasTableFilters}
            maxVisibleEntries={maxVisibleEntries} 
            shouldShowRejectedApplications={shouldShowRejectedApplications} 
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
  const allApplications = useAppSelector(state => state.applications.applications);
  const itemsPerPage = useItemsPerPage();
  const shouldShowRejectedApplications = useShowRejectedApplications();

  return <ApplicationsDataDisplay 
    title={title} 
    maxVisibleEntries={maxVisibleEntries} 
    hasTableFilters={hasTableFilters}
    applications={allApplications}
    itemsPerPage={itemsPerPage}
    shouldShowRejectedApplications={shouldShowRejectedApplications}
  />
}


export default WithStoreConnection
