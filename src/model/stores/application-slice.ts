import type { ApplicationData } from "../../utils/types";
import { Repository } from "../Repository";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MarkApplicationAsRejectedDialogSliceData } from "./mark-application-as-rejected-dialog-slice";

interface ApplicationStoreData {
  applications: ApplicationData[];
  isProcessing: boolean;
  dataModel: Repository<ApplicationData>;
}

const dataModel = new Repository<ApplicationData>();
const initialState: ApplicationStoreData = {
  applications: dataModel.readAllRecords(),
  isProcessing: false,
  dataModel: dataModel,
}

const applicationSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    createApplication: (state, action: PayloadAction<ApplicationData>) => {
      const newApplication = action.payload;
      const updatedApplications = [...state.applications, newApplication];
      state.dataModel.createRecord(newApplication);
      state.applications = updatedApplications
    },
    markApplicationAsRejected: (state, action: PayloadAction<MarkApplicationAsRejectedDialogSliceData>) => {
      const { id: applicationId, company } = action.payload;
      if (!applicationId || !company) return;

      const dataModel = state.dataModel;
      const updateApplications = [...state.applications];
      const rejectedApplication = dataModel.readRecord(applicationId);
      rejectedApplication.disabled = true;
      dataModel.updateRecord(applicationId, rejectedApplication);
      state.applications = updateApplications.map(application => 
        application.id === applicationId ? rejectedApplication : application
      );
    }
  }
});

export const { createApplication, markApplicationAsRejected } = applicationSlice.actions;
export default applicationSlice.reducer;