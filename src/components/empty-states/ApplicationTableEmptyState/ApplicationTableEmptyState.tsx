import React from 'react'
import styled from 'styled-components'
import ApplicationEmptyState from '../ApplicationEmptyState/ApplicationEmptyState'

const ApplicationTableEmptyStateContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

const ApplicationTableEmptyState: React.FC = () => {
  return (
    <ApplicationTableEmptyStateContainer>
      <ApplicationEmptyState />
    </ApplicationTableEmptyStateContainer>
  )
}

export default ApplicationTableEmptyState
