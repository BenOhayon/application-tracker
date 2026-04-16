import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import React, { useEffect } from 'react'
import type { TableRecord } from '../../utils/types';
import { Card } from '../../utils/styled-components';
import styled from 'styled-components';
import PaginationFooter from './PaginationFooter';

interface TableProps {
  title?: string;
  filters?: React.ReactElement;
  data: TableRecord[];
  columns: ColumnDef<TableRecord>[];
  itemsPerPage: number;
  maxVisibleEntries?: number;
  emptyState: React.ReactElement;
}

const TableContainer = styled(Card)`
  padding: 0;
  gap: 0;
  margin-bottom: 32px;
  overflow-x: auto;
`

const TableContent = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`

const TableTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 24px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: 1px solid #6b728023;
`;

const TableTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const StyledTh = styled.th`
  text-align: left;
  padding: 16px 24px;
  background-color: #F9FAFB;
  color: #6b7280;
  font-size: 14px;
  font-weight: 600;
`;

const StyledTd = styled.td`
  text-align: left;
  padding: 24px;
  color: #374151;
  font-size: 14px;
`;

const StyledTbodyTr = styled.tr<{isDisabled?: boolean}>`
  ${({ isDisabled }) => isDisabled ? `
    background-color: #f9fafbd2;
    opacity: 0.5;
    pointer-events: none;
  ` : `
    background-color: #fff;
    opacity: 1;
  `}
  &:not(:last-child) {
    border-bottom: 1px solid #F3F4F6;
  }
`;

const TableTitleLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Table: React.FC<TableProps> = ({ 
  title, 
  filters, 
  data, 
  columns, 
  itemsPerPage, 
  maxVisibleEntries,
  emptyState,
}) => {
  const firstPageEndIndex = maxVisibleEntries ? maxVisibleEntries : itemsPerPage;
  const [visibleData, setVisibleData] = React.useState<TableRecord[]>(data.slice(0, firstPageEndIndex));
  const {
    getHeaderGroups,
    getRowModel
  // eslint-disable-next-line react-hooks/incompatible-library
  } = useReactTable({
    data: visibleData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  useEffect(() => {
    setVisibleData(data.slice(0, firstPageEndIndex));
  }, [data, firstPageEndIndex])

  return (
    <TableContainer>
      {(title || filters) && (
        <TableTitleContainer>
          <TableTitleLeftSection>
            {title && <TableTitle>{title}</TableTitle>}
            {filters && <div>{filters}</div>}
          </TableTitleLeftSection>
        </TableTitleContainer>
      )}
      {visibleData.length === 0 ? (
        emptyState
      ) : (
        <>
        <TableContent>
          <thead>
            {getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <StyledTh key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </StyledTh>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map(row => (
              <StyledTbodyTr key={row.id} isDisabled={(row.original as TableRecord).disabled}>
                {row.getVisibleCells().map(cell => (
                  <StyledTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTd>
                ))}
              </StyledTbodyTr>
            ))}
          </tbody>
        </TableContent>
        {
          (!maxVisibleEntries) && <PaginationFooter 
            data={data} 
            setVisibleData={(dataToDisplay: TableRecord[]) => setVisibleData(dataToDisplay)} 
            itemsPerPage={itemsPerPage}
          />
        }
      </>
      )}
    </TableContainer>
  )
}

export default Table
