import React from 'react'
import styled from 'styled-components'
import ApplicationsDataDisplay from '../../components/ApplicationsDataDisplay/ApplicationsDataDisplay'

const MyApplicationsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const MyApplicationsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

const MyApplicationsTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1F2937;
`

const MyApplicationsPage: React.FC = () => {
  return (
    <MyApplicationsPageContainer>
      <MyApplicationsTitleContainer>
        <MyApplicationsTitle>My Applications</MyApplicationsTitle>
      </MyApplicationsTitleContainer>
      <ApplicationsDataDisplay />
    </MyApplicationsPageContainer>
  )
}

export default MyApplicationsPage
