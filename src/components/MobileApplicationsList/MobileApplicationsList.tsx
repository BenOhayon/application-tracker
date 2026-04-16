import React from 'react'
import type { TableRecord } from '../../utils/types'
import MobileTableDataList from '../MobileTableDataList/MobileTableDataList';
import MobileApplicationsTableItem from '../MobileApplicationsTableItem/MobileApplicationsTableItem';

interface MobileApplicationsListProps {
  data: TableRecord[];
}

const MobileApplicationsList: React.FC<MobileApplicationsListProps> = ({ data }) => {
  return (
    <MobileTableDataList data={data} ItemComponent={MobileApplicationsTableItem} />
  )
}

export default MobileApplicationsList;
