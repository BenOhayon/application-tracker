import React from 'react'
import type { TableRecord } from '../../utils/types'
import styled from 'styled-components';

interface MobileTableDataListProps {
  data: TableRecord[];
  ItemComponent: React.ComponentType<{ record: TableRecord }>;
}

const MobileTableDataListContainer = styled.ul`
  list-style: none;
  padding: 0 0 30px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MobileTableDataList: React.FC<MobileTableDataListProps> = ({ data, ItemComponent }) => {
  return (
    <MobileTableDataListContainer>
      {
        data.map(record => <ItemComponent key={record.id} record={record} />)
      }
    </MobileTableDataListContainer>
  )
}

export default MobileTableDataList
