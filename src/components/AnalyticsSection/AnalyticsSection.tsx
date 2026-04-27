import React from 'react'
import type { AnalyticsData } from '../../utils/types';
import { IoDocumentTextOutline } from 'react-icons/io5';
import styled from 'styled-components';
import AnalyticsBox from '../AnalyticsBox/AnalyticsBox';
import { IoMdCalendar, IoMdCloseCircleOutline } from 'react-icons/io';
import { GiStarMedal } from 'react-icons/gi';
import { useApplications } from '../../model/stores/applications-store';

interface AnalyticsSectionProps {
  analytics: AnalyticsData[];
}

const AnalyticsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme }) => `
    ${theme.dimensions.mobile} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100px 100px;
    }
  `}
`

const analyticsIconsStyle = `
  width: 20px;
  height: 20px;
  color: #5048e58f;
`

const DocumentIcon = styled(IoDocumentTextOutline)`
  ${analyticsIconsStyle}
`

const CalendarIcon = styled(IoMdCalendar)`
  ${analyticsIconsStyle}
`

const MedalIcon = styled(GiStarMedal)`
  ${analyticsIconsStyle}
`

const CloseIcon = styled(IoMdCloseCircleOutline)`
  ${analyticsIconsStyle}
`

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ analytics }) => {  
  return (
    <AnalyticsContainer>
      {analytics.map(analyticsItem => <AnalyticsBox 
        key={analyticsItem.title}
        title={analyticsItem.title}
        value={analyticsItem.value}
        icon={analyticsItem.icon}
      />)}
    </AnalyticsContainer>
  )
}

const WithStoreConnection = () => {
  const applications = useApplications();
  const appliedCount = applications.length;
  const interviewCount = applications.filter(application => !['Applied', 'Offer'].includes(application.lastPhase)).length;
  const offersCount = applications.filter(application => application.lastPhase === 'Offer').length;
  const rejectionsCount = applications.filter(application => application.disabled).length;

  const analytics = [
    {
      title: 'Applied',
      value: appliedCount,
      icon: <DocumentIcon />
    },
    {
      title: 'Interviews',
      value: interviewCount,
      icon: <CalendarIcon />
    },
    {
      title: 'Offers Received',
      value: offersCount,
      icon: <MedalIcon />
    },
    {
      title: 'Rejections',
      value: rejectionsCount,
      icon: <CloseIcon />
    }
  ] as const satisfies AnalyticsData[];

  return <AnalyticsSection analytics={analytics} />
}

export default WithStoreConnection
