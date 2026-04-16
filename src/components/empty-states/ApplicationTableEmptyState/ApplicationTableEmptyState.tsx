import React from 'react'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import styled from 'styled-components'
import AddApplicationButton from '../../AddApplicationButton/AddApplicationButton'

const ApplicationTableEmptyStateContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

const ApplicationTableEmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  padding: 20px;
`

const FolderIcon = styled(AiOutlineFolderOpen)`
  width: 50px;
  height: 50px;
  background-color: #5048e518;
  color: #5048e5;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 24px;
`

const ApplicationTableEmptyStateTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 12px;
  text-align: center;
`

const ApplicationTableEmptyStateSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #64748B;
  margin-bottom: 32px;
  text-align: center;
`

const ApplicationTableEmptyState: React.FC = () => {
  return (
    <ApplicationTableEmptyStateContainer>
      <ApplicationTableEmptyStateContent>
        <FolderIcon />
        <ApplicationTableEmptyStateTitle>No active applications yet</ApplicationTableEmptyStateTitle>
        <ApplicationTableEmptyStateSubtitle>
          Your career journey is about to begin. Start tracking your
          journey by adding your first job application and we'll help
          you manage the rest.
        </ApplicationTableEmptyStateSubtitle>
        <AddApplicationButton />
      </ApplicationTableEmptyStateContent>
    </ApplicationTableEmptyStateContainer>
  )
}

export default ApplicationTableEmptyState
