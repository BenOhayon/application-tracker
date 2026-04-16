import type { ColumnDef } from "@tanstack/react-table";

export interface TableColumnDef<T> extends Omit<ColumnDef<T>, 'accessorKey'> {
  accessorKey: keyof T;
}