import React from 'react'
import type { TableRecord } from '../../utils/types'
import MobileTableDataList from '../MobileTableDataList/MobileTableDataList';
import MobileApplicationsTableItem from '../MobileApplicationsTableItem/MobileApplicationsTableItem';
import ApplicationEmptyState from '../empty-states/ApplicationEmptyState/ApplicationEmptyState';

interface MobileApplicationsListProps {
  data: TableRecord[];
}

const MobileApplicationsList: React.FC<MobileApplicationsListProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <ApplicationEmptyState />
  }
  
  return (
    <MobileTableDataList data={data} ItemComponent={MobileApplicationsTableItem} />
  )
}

export default MobileApplicationsList;
