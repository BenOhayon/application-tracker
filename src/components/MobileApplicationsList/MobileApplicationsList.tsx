import React from 'react'
import type { TableRecord } from '../../utils/types'
import MobileTableDataList from '../MobileTableDataList/MobileTableDataList';
import MobileApplicationsTableItem from '../MobileApplicationsTableItem/MobileApplicationsTableItem';
import ShouldShowRejectedApplicationsCheckbox from '../ShouldShowRejectedApplicationsCheckbox/ShouldShowRejectedApplicationsCheckbox';

interface MobileApplicationsListProps {
  title?: string;
  count?: number;
  data: TableRecord[];
  hasFilters?: boolean;
}

const MobileApplicationsList: React.FC<MobileApplicationsListProps> = ({ title, count, data, hasFilters }) => {  
  return (
    <MobileTableDataList
      {...(hasFilters && { filters: <ShouldShowRejectedApplicationsCheckbox /> })}
      title={title} 
      count={count}
      data={data} 
      ItemComponent={MobileApplicationsTableItem} 
    />
  )
}

export default MobileApplicationsList;
