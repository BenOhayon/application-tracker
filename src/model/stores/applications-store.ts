import type { ApplicationData } from "../../utils/types";
import { Repository } from "../Repository";
import type { MarkApplicationAsRejectedDialogStoreData } from "./mark-application-as-rejected-dialog-store";
import { create } from "zustand";

interface ApplicationsStoreData {
  applications: ApplicationData[];
  isProcessing: boolean;
  dataModel: Repository<ApplicationData>;
}

interface ApplicationsStoreActions {
  createApplication: (applicationData: ApplicationData) => void;
  markApplicationAsRejected: (data: MarkApplicationAsRejectedDialogStoreData) => void;
}

type ApplicationsStoreState = ApplicationsStoreData & ApplicationsStoreActions;

const dataModel = new Repository<ApplicationData>();
const initialState: ApplicationsStoreData = {
  applications: dataModel.readAllRecords(),
  isProcessing: false,
  dataModel: dataModel,
}

const useApplicationsStore = create<ApplicationsStoreState>((set, get) => ({
  ...initialState,
  createApplication: (newApplication: ApplicationData) => {
    const { applications: applicationsList, dataModel } = get();
    dataModel.createRecord(newApplication);
    set({ applications: [...applicationsList, newApplication] });
  },
  markApplicationAsRejected: ({ id: applicationId, company }: MarkApplicationAsRejectedDialogStoreData) => {
    if (!applicationId || !company) return;

    const { applications: applicationsList, dataModel } = get();
    const rejectedApplication = applicationsList.find(application => application.id === applicationId);
    if (!rejectedApplication) return;

    rejectedApplication.disabled = true;
    dataModel.updateRecord(applicationId, rejectedApplication);
    set({ applications: applicationsList.map(application => 
      application.id === applicationId ? rejectedApplication : application
    )});
  }
}));

export const useApplications = () => useApplicationsStore(state => state.applications);
export const useIsProcessing = () => useApplicationsStore(state => state.isProcessing);

export const useCreateApplication = () => useApplicationsStore(state => state.createApplication);
export const useMarkApplicationAsRejected = () => useApplicationsStore(state => state.markApplicationAsRejected);