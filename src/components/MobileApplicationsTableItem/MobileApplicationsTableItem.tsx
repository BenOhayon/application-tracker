import React from 'react'
import styled from 'styled-components'
import { Card } from '../../utils/styled-components'
import CompanyImageBox from '../CompanyImageBox/CompanyImageBox'
import type { ApplicationData } from '../../utils/types';
import { formatRelativeTime } from '../../utils/dateUtils';
import { PiClockCounterClockwise } from 'react-icons/pi';
import ApplicationActions from '../ApplicationActions/ApplicationActions';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface MobileApplicationsTableItemProps {
  record: ApplicationData;
}

const MobileApplicationsTableItemContainer = styled(Card)<{isRejected: ApplicationData['disabled']}>`
  gap: 16px;
  border: none;
  padding: 16px;
  ${({ isRejected }) => `
    opacity: ${isRejected ? 0.5 : 1};
    ${isRejected ? 'pointer-events: none;' : ''}
  `}
  opacity: ${({ isRejected }) => isRejected ? 0.5 : 1};
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

const TitlesContainerLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CompanyName = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`

const Role = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #566166;
  `

const HybridnessContainer = styled.div`
  padding: 4px 8px;
  background-color: #F0F4F7;
  color: #566166;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`

const MobileApplicationsTableItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const PhaseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 15px;
  padding: 12px;
  background-color: #D1DDFA;
  flex-grow: 1;
`

const PhaseBoxTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #434e66c9;
`

const PhaseBoxPhaseName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #434E66;
`

const MobileApplicationsTableItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const LastInteractionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const LastInteractionLabel = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #566166;
`

const ClockImage = styled(PiClockCounterClockwise)`
  width: 20px;
  height: 20px;
`

const RejectedStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const RejectedStatusLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #566166;
`

const RejectedImage = styled(IoMdCloseCircleOutline)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: #566166;
`

const MobileApplicationsTableItem: React.FC<MobileApplicationsTableItemProps> = ({ record }) => {
  const { 
    id, 
    company, 
    role, 
    hybridness, 
    lastPhase, 
    nextPhase, 
    lastInteraction, 
    disabled,
  } = record;
  const companyInitials = company.slice(0, 2).toUpperCase();
  const phasesData = [
    {
      title: 'Last phase',
      phaseName: lastPhase,
    },
    {
      title: 'Next phase',
      phaseName: nextPhase,
    },
  ]

  return (
    <MobileApplicationsTableItemContainer isRejected={disabled}>
      <TitleContainer>
        <TitlesContainerLeftSection>
          <CompanyImageBox companyInitials={companyInitials} />
          <Titles>
            <CompanyName>{company}</CompanyName>
            <Role>{role}</Role>
          </Titles>
        </TitlesContainerLeftSection>
        <HybridnessContainer>{hybridness}</HybridnessContainer>
      </TitleContainer>
      <MobileApplicationsTableItemContent>
        {
          phasesData.map(phase => <PhaseBox key={phase.title}>
            <PhaseBoxTitle>{phase.title}</PhaseBoxTitle>
            <PhaseBoxPhaseName>{phase.phaseName}</PhaseBoxPhaseName>
          </PhaseBox>)
        }
      </MobileApplicationsTableItemContent>
      <MobileApplicationsTableItemFooter>
        <LastInteractionSection>
          <ClockImage />
          <LastInteractionLabel>{formatRelativeTime(new Date(lastInteraction))}</LastInteractionLabel>
        </LastInteractionSection>
        {disabled ? <RejectedStatus>
          <RejectedImage />
          <RejectedStatusLabel>Application rejected</RejectedStatusLabel>
        </RejectedStatus> : <ApplicationActions 
          applicationCompany={company}
          applicationId={id}
        />}
      </MobileApplicationsTableItemFooter>
    </MobileApplicationsTableItemContainer>
  )
}

export default MobileApplicationsTableItem
