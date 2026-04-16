import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Hybridness, InterviewPhase, LastPhase, NextPhase } from "../../utils/types";

interface CreateApplicationDialogSliceData {
  company: string;
  role: string;
  interviewPhases: (InterviewPhase | 'N/A')[];
  selectedLastPhase: LastPhase;
  selectedNextPhase: NextPhase;
  selectedHybridness: Hybridness;
  hybridnessOptions: Hybridness[];
}

const initialState: CreateApplicationDialogSliceData = {
  company: '',
  role: '',
  interviewPhases: ['N/A', 'Applied', 'Offer', 'Phone interview', 'Video Interview', 'Tech Interview', 'On-site Interview'],
  selectedLastPhase: 'Applied',
  selectedNextPhase: null,
  selectedHybridness: 'Hybrid',
  hybridnessOptions: ['Hybrid', 'On-site', 'Remote'],
}

const createNewApplicationDialogSlice = createSlice({
  name: 'createNewApplication',
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<CreateApplicationDialogSliceData['company']>) => {
      const company = action.payload;
      state.company = company;
    },
    setRole: (state, action: PayloadAction<CreateApplicationDialogSliceData['role']>) => {
      const role = action.payload;
      state.role = role;
    },
    setSelectedHybridness: (state, action: PayloadAction<CreateApplicationDialogSliceData['selectedHybridness']>) => {
      const selectedHybridness = action.payload;
      state.selectedHybridness = selectedHybridness;
    },
    setSelectedLastPhase: (state, action: PayloadAction<CreateApplicationDialogSliceData['selectedLastPhase']>) => {
      const selectedLastPhase = action.payload;
      state.selectedLastPhase = selectedLastPhase;
      if (selectedLastPhase === 'Offer') {
        state.selectedNextPhase = 'N/A';
      }
    },
    setSelectedNextPhase: (state, action: PayloadAction<CreateApplicationDialogSliceData['selectedNextPhase']>) => {
      const selectedNextPhase = action.payload;
      state.selectedNextPhase = selectedNextPhase;
    },
    setInterviewPhases: (state, action: PayloadAction<CreateApplicationDialogSliceData['interviewPhases']>) => {
      const interviewPhases = action.payload;
      state.interviewPhases = interviewPhases;
    },
    resetData: (state) => {
      const { company, role, selectedLastPhase, selectedNextPhase, selectedHybridness } = initialState;
      state.company = company;
      state.role = role;
      state.selectedLastPhase = selectedLastPhase;
      state.selectedNextPhase = selectedNextPhase;
      state.selectedHybridness = selectedHybridness;
    }
  }
});

export const {
  setCompany,
  setRole,
  setSelectedHybridness,
  setSelectedLastPhase,
  setSelectedNextPhase,
  setInterviewPhases,
  resetData,
} = createNewApplicationDialogSlice.actions;
export default createNewApplicationDialogSlice.reducer;