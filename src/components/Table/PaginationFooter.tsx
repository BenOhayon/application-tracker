import React from 'react'
import type { TableRecord } from '../../utils/types'
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSetItemsPerPage } from '../../model/stores/applications-table-store';

interface PaginationFooterProps {
  data: TableRecord[];
  setVisibleData: (data: TableRecord[]) => void;
  itemsPerPage: number;
}

const PaginationFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #f0f4f749;
`

const RowsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const PaginationFooterLabel = styled.span`
  font-size: 14px;
  color: #566166;
`

const PageSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const PageSelectorButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

const NextPageButton = styled(FaChevronRight)`
  cursor: pointer;
  color: #566166;
  padding: 5px;
  border-radius: 50%;

  &:hover {
    background-color: #e5e7eb;
  }
  &:active {
    background-color: #d1d5db;
  }
`

const PreviousPageButton = styled(FaChevronLeft)`
  cursor: pointer;
  color: #566166;
  padding: 5px;
  border-radius: 50%;

  &:hover {
    background-color: #e5e7eb;
  }
  &:active {
    background-color: #d1d5db;
  }
`

const PaginationFooter: React.FC<PaginationFooterProps> = ({ data, setVisibleData, itemsPerPage }) => {
  const setItemsPerPage = useSetItemsPerPage();
  const [currentPage, setCurrentPage] = React.useState(1);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const perPageOptions = [5, 10, 20];

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setVisibleData(data.slice((currentPage) * itemsPerPage, (currentPage + 1) * itemsPerPage));
      setCurrentPage(prev => prev + 1);
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setVisibleData(data.slice((currentPage - 2) * itemsPerPage, (currentPage - 1) * itemsPerPage));
      setCurrentPage(prev => prev - 1);
    }
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setVisibleData(data.slice(0, newItemsPerPage));
    setCurrentPage(1);
  }

  return (
    <PaginationFooterContainer>
      <RowsPerPageContainer>
        <PaginationFooterLabel>Rows per page:</PaginationFooterLabel>
        {/* TODO - Create a separate component for sthis selection of items per page */}
        <select value={itemsPerPage} onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}>
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </RowsPerPageContainer>
      <PageSelectorContainer>
        <PaginationFooterLabel>{`Page ${currentPage} of ${totalPages}`}</PaginationFooterLabel>
        <PageSelectorButtonsContainer>
          <PreviousPageButton onClick={goToPreviousPage} />
          <NextPageButton onClick={goToNextPage} />
        </PageSelectorButtonsContainer>
      </PageSelectorContainer>
    </PaginationFooterContainer>
  )
}

export default PaginationFooter
