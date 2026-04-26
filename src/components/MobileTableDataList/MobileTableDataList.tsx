import React from 'react'
import type { TableRecord } from '../../utils/types'
import styled from 'styled-components';
import ApplicationEmptyState from '../empty-states/ApplicationEmptyState/ApplicationEmptyState';

interface MobileTableDataListProps {
  title?: string;
  count?: number;
  data: TableRecord[];
  filters?: React.ReactElement;
  ItemComponent: React.ComponentType<{ record: TableRecord }>;
}

const MobileTableDataListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MobileTableDataListContent = styled.ul`
  list-style: none;
  padding: 0 0 30px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MobileTableDataListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MobileTableDataListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const MobileTableDataListTitle = styled.h2`
  font-size: 24px;
`

const MobileTableDataListCount = styled.p`
  font-size: 16px;
  color: #566166;
`

const MobileTableDataList: React.FC<MobileTableDataListProps> = ({ title, count, data, filters, ItemComponent }) => {
  return (
    <MobileTableDataListContainer>
      {(title || count || filters) && <MobileTableDataListHeader>
        <MobileTableDataListTitleContainer>
          <MobileTableDataListTitle>
            {title}
          </MobileTableDataListTitle>
          {filters}
        </MobileTableDataListTitleContainer>
        {count !== undefined && <MobileTableDataListCount>{count} Total</MobileTableDataListCount>}
      </MobileTableDataListHeader>}
      {
        (!data || data.length === 0) ? <ApplicationEmptyState /> :  <MobileTableDataListContent> 
          {
            data.map(record => <ItemComponent key={record.id} record={record} />)
          }
        </MobileTableDataListContent>
      }
    </MobileTableDataListContainer>
  )
}

export default MobileTableDataList
