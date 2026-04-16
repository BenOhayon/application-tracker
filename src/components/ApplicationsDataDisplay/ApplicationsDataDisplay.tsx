import React from 'react'
import { useIsMobile } from '../../hooks/is-mobile'
import MobileApplicationsList from '../../components/MobileApplicationsList/MobileApplicationsList'
import ApplicationsTable from '../../components/Table/ApplicationsTable'
import { useAppSelector } from '../../model/stores/store-hooks'

interface ApplicationsDataDisplayProps {
  tableTitle?: string;
  hasTableFilters?: boolean;
  maxVisibleEntries?: number;
}

const ApplicationsDataDisplay: React.FC<ApplicationsDataDisplayProps> = ({
  tableTitle,
  hasTableFilters,
  maxVisibleEntries,
}) => {
  let applications = useAppSelector(state => state.applications.applications);
  const isMobile = useIsMobile();

  if (maxVisibleEntries) {
    applications = applications.slice(0, maxVisibleEntries)
  }

  return (
    <>
      {
        isMobile ? (
          <MobileApplicationsList data={applications} />
        ) : (
          <ApplicationsTable 
            title={tableTitle} 
            hasFilters={hasTableFilters} 
            maxVisibleEntries={maxVisibleEntries} 
          />
        )
      }
    </>
  )
}

export default ApplicationsDataDisplay
