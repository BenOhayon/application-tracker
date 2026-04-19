import React from 'react'
import type { TableRecord } from '../../utils/types'
import MobileTableDataList from '../MobileTableDataList/MobileTableDataList';
import MobileApplicationsTableItem from '../MobileApplicationsTableItem/MobileApplicationsTableItem';
import ApplicationEmptyState from '../empty-states/ApplicationEmptyState/ApplicationEmptyState';

interface MobileApplicationsListProps {
  title?: string;
  count?: number;
  data: TableRecord[];
}

const MobileApplicationsList: React.FC<MobileApplicationsListProps> = ({ title, count, data }) => {
  if (!data || data.length === 0) {
    return <ApplicationEmptyState />
  }
  
  return (
    <MobileTableDataList 
      title={title} 
      count={count}
      data={data} 
      ItemComponent={MobileApplicationsTableItem} 
    />
  )
}

export default MobileApplicationsList;
