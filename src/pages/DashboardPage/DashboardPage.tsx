import React from 'react'
import styled from 'styled-components'
import AnalyticsSection from '../../components/AnalyticsSection/AnalyticsSection'
import ApplicationsDataDisplay from '../../components/ApplicationsDataDisplay/ApplicationsDataDisplay'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const DashboardPage: React.FC = () => {
  return (
    <DashboardContainer>
      <AnalyticsSection />
      <ApplicationsDataDisplay tableTitle='Active applications' hasTableFilters={false} maxVisibleEntries={5} />
    </DashboardContainer>
  )
}

export default DashboardPage
