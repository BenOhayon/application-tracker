import React from 'react'
import styled from 'styled-components';
import type { AnalyticsData } from '../../utils/types';
import { Card } from '../../utils/styled-components';

const AnalyticsBoxContainer = styled(Card)`
  flex-grow: 1;
`

const AnalyticsBoxContainerTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const AnalyticsBoxTitle = styled.h5`
  font-weight: normal;
  color: #64748B;
  `

const AnalyticsBoxValue = styled.h1`
  font-weight: normal;
  color: #0F172A;
`

const AnalyticsBox: React.FC<AnalyticsData> = ({ title, value, icon }) => {
  return (
    <AnalyticsBoxContainer>
      <AnalyticsBoxContainerTitleContainer>
        <AnalyticsBoxTitle>{title}</AnalyticsBoxTitle>
        {icon}
      </AnalyticsBoxContainerTitleContainer>
      <AnalyticsBoxValue>{value}</AnalyticsBoxValue>
    </AnalyticsBoxContainer>
  )
}

export default AnalyticsBox