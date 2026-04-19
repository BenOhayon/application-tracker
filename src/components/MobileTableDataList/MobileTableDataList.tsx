import React from 'react'
import type { TableRecord } from '../../utils/types'
import styled from 'styled-components';

interface MobileTableDataListProps {
  title?: string;
  count?: number;
  data: TableRecord[];
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

const MobileTableDataListTitle = styled.h2`
  font-size: 24px;
`

const MobileTableDataListCount = styled.p`
  font-size: 16px;
  color: #566166;
`

const MobileTableDataList: React.FC<MobileTableDataListProps> = ({ title, count, data, ItemComponent }) => {
  return (
    <MobileTableDataListContainer>
      {(title || count) && <MobileTableDataListHeader>
        <MobileTableDataListTitle>{title}</MobileTableDataListTitle>
        {count && <MobileTableDataListCount>{count} Total</MobileTableDataListCount>}
      </MobileTableDataListHeader>}
      <MobileTableDataListContent> 
        {
          data.map(record => <ItemComponent key={record.id} record={record} />)
        }
      </MobileTableDataListContent>
    </MobileTableDataListContainer>
  )
}

export default MobileTableDataList
