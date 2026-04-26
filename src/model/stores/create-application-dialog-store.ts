import type { Hybridness, InterviewPhase, LastPhase, NextPhase } from "../../utils/types";
import { create } from "zustand";

interface CreateApplicationDialogStoreData {
  company: string;
  role: string;
  interviewPhases: InterviewPhase[];
  selectedLastPhase: LastPhase;
  selectedNextPhase: NextPhase;
  selectedHybridness: Hybridness;
  hybridnessOptions: Hybridness[];
}

interface CreateApplicationDialogStoreActions {
  setCompany: (company: CreateApplicationDialogStoreData['company']) => void;
  setRole: (role: CreateApplicationDialogStoreData['role']) => void;
  setSelectedHybridness: (selectedHybridness: CreateApplicationDialogStoreData['selectedHybridness']) => void;
  setSelectedLastPhase: (selectedLastPhase: CreateApplicationDialogStoreData['selectedLastPhase']) => void;
  setSelectedNextPhase: (selectedNextPhase: CreateApplicationDialogStoreData['selectedNextPhase']) => void;
  setInterviewPhases: (interviewPhases: CreateApplicationDialogStoreData['interviewPhases']) => void;
  resetData: () => void;
}

type CreateApplicationDialogStoreState = CreateApplicationDialogStoreData & CreateApplicationDialogStoreActions;

const initialState: CreateApplicationDialogStoreData = {
  company: '',
  role: '',
  interviewPhases: ['N/A', 'Applied', 'Offer', 'Phone interview', 'Video Interview', 'Tech Interview', 'On-site Interview'],
  selectedLastPhase: 'Applied',
  selectedNextPhase: null,
  selectedHybridness: 'Hybrid',
  hybridnessOptions: ['Hybrid', 'On-site', 'Remote'],
}

const useCreateNewApplicationDialogStore = create<CreateApplicationDialogStoreState>((set) => ({
  ...initialState,
  setCompany: (company) => set((state) => ({ ...state, company })),
  setRole: (role) => set((state) => ({ ...state, role })),
  setSelectedHybridness: (selectedHybridness) => set((state) => ({ ...state, selectedHybridness })),
  setSelectedLastPhase: (selectedLastPhase) => set((state) => ({ ...state, selectedLastPhase })),
  setSelectedNextPhase: (selectedNextPhase) => set((state) => ({ ...state, selectedNextPhase })),
  setInterviewPhases: (interviewPhases) => set((state) => ({ ...state, interviewPhases })),
  resetData: () => set(initialState),
}));

export const useCompany = () => useCreateNewApplicationDialogStore((state) => state.company);
export const useRole = () => useCreateNewApplicationDialogStore((state) => state.role);
export const useSelectedHybridness = () => useCreateNewApplicationDialogStore((state) => state.selectedHybridness);
export const useSelectedLastPhase = () => useCreateNewApplicationDialogStore((state) => state.selectedLastPhase);
export const useSelectedNextPhase = () => useCreateNewApplicationDialogStore((state) => state.selectedNextPhase);
export const useHybridnessOptions = () => useCreateNewApplicationDialogStore((state) => state.hybridnessOptions);
export const useInterviewPhases = () => useCreateNewApplicationDialogStore((state) => state.interviewPhases);

export const useSetCompany = () => useCreateNewApplicationDialogStore((state) => state.setCompany);
export const useSetRole = () => useCreateNewApplicationDialogStore((state) => state.setRole);
export const useSetSelectedHybridness = () => useCreateNewApplicationDialogStore((state) => state.setSelectedHybridness);
export const useSetSelectedLastPhase = () => useCreateNewApplicationDialogStore((state) => state.setSelectedLastPhase);
export const useSetSelectedNextPhase = () => useCreateNewApplicationDialogStore((state) => state.setSelectedNextPhase);
export const useSetInterviewPhases = () => useCreateNewApplicationDialogStore((state) => state.setInterviewPhases);
export const useResetData = () => useCreateNewApplicationDialogStore((state) => state.resetData);