import type { ApplicationData } from "./types"
import CompanyCell from "../components/Table/table-cells/CompanyCell";
import LastInteractionCell from "../components/Table/table-cells/LastInteractionCell";
import TextCell from "../components/Table/table-cells/TextCell";
import ApplicationActionsCell from "../components/Table/table-cells/ApplicationActionsCell";
import type { TableColumnDef } from "./column-def";
import NextPhaseCell from "../components/Table/table-cells/NextPhaseCell";
import LastPhaseCell from "../components/Table/table-cells/LastPhaseCell";

export const applicationsColumnDef: TableColumnDef<ApplicationData>[] = [
  {
    accessorKey: 'company',
    header: 'Company',
    cell: CompanyCell as TableColumnDef<ApplicationData>["cell"],
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: TextCell as TableColumnDef<ApplicationData>["cell"],
  },
  {
    accessorKey: 'hybridness',
    header: 'Hybridness',
    cell: TextCell as TableColumnDef<ApplicationData>["cell"],
  },
  {
    accessorKey: 'lastInteraction',
    header: 'Last Interaction',
    cell: LastInteractionCell as TableColumnDef<ApplicationData>["cell"],
  },
  {
    accessorKey: 'lastPhase',
    header: 'Last Phase',
    cell: LastPhaseCell as TableColumnDef<ApplicationData>["cell"],
  },
  {
    accessorKey: 'nextPhase',
    header: 'Next Phase',
    cell: NextPhaseCell as TableColumnDef<ApplicationData>["cell"],
  },
  {
    accessorKey: 'totalPhases',
    header: 'Actions',
    cell: ApplicationActionsCell as TableColumnDef<ApplicationData>["cell"],
  }
];