import type { Dialogs } from "../utils/types";
import CreateApplicationDialog from "./CreateApplicationDialog";
import MarkApplicationAsRejectedDialog from "./MarkApplicationAsRejectedDialog";

export const dialogs = {
  createApplicationDialog: <CreateApplicationDialog key="createApplicationDialog" />,
  markApplicationAsRejectedDialog: <MarkApplicationAsRejectedDialog key="markApplicationAsRejectedDialog" />,
} as const satisfies Dialogs;