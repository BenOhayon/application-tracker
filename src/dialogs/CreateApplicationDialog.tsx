import React from 'react'
import Dialog from '../components/Dialog/Dialog'
import { PiBuildingOfficeDuotone } from 'react-icons/pi';
import styled, { css } from 'styled-components';
import { FaRegAddressCard } from 'react-icons/fa';
import TextInputField from '../components/InputField/TextInputField';
import SelectInputField from '../components/InputField/SelectInputField';
import type { Hybridness, InterviewPhase, LastPhase, NextPhase } from '../utils/types';
import { useCloseDialog } from '../model/stores/dialog-store';
import { useCompany, useHybridnessOptions, useInterviewPhases, useResetData, useRole, useSelectedHybridness, useSelectedLastPhase, useSelectedNextPhase, useSetCompany, useSetRole, useSetSelectedHybridness, useSetSelectedLastPhase, useSetSelectedNextPhase } from '../model/stores/create-application-dialog-store';
import { useCreateApplication } from '../model/stores/applications-store';

interface CreateApplicationDialogProps {
  company: string;
  setCompany: (company: string) => void;
  role: string;
  setRole: (role: string) => void;
  lastPhaseOptions: InterviewPhase[];
  nextPhaseOptions: InterviewPhase[];
  selectedLastPhase: LastPhase;
  setSelectedLastPhase: (phase: LastPhase) => void;
  selectedNextPhase: NextPhase;
  setSelectedNextPhase: (phase: NextPhase) => void;
  selectedHybridness: Hybridness;
  setSelectedHybridness: (hybridness: Hybridness) => void;
  hybridnessOptions: Hybridness[];
  isCreateButtonAllowed: boolean;
  handleCreateApplication: () => void;
}

const iconStyle = css`
  width: 20px;
  height: 20px;
`;

const OfficeIcon = styled(PiBuildingOfficeDuotone)`
  ${iconStyle}
`

const RoleIcon = styled(FaRegAddressCard)`
  ${iconStyle}
`

const CreateApplicationDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InputsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const RowItem = styled.div`
  flex-grow: 1;
`

const CreateApplicationDialog: React.FC<CreateApplicationDialogProps> = ({
  company,
  setCompany,
  role,
  setRole,
  lastPhaseOptions,
  nextPhaseOptions,
  selectedLastPhase,
  selectedNextPhase,
  setSelectedLastPhase,
  setSelectedNextPhase,
  selectedHybridness,
  setSelectedHybridness,
  hybridnessOptions,
  isCreateButtonAllowed,
  handleCreateApplication,
}) => {
  return (
    <Dialog
      title='Add New Application'
      subtitle='Track your progress and organize your professional journey.'
      confirmButtonText='Add Application'
      onConfirmButtonClick={handleCreateApplication}
      isConfirmButtonDisabled={!isCreateButtonAllowed}
      >
        <CreateApplicationDialogContent>
          <TextInputField
            title="Company"
            icon={<OfficeIcon />}
            placeholder='e.g. Google'
            value={company}
            onChange={setCompany}
          />
          <TextInputField
            title="Role"
            icon={<RoleIcon />}
            placeholder='e.g. Senior Product Designer'
            value={role}
            onChange={setRole}
          />
          <SelectInputField 
            title="Hybridness"
            options={hybridnessOptions} 
            selectedValue={selectedHybridness} 
            onSelect={(value) => setSelectedHybridness(value as Hybridness)}             
          />
          <InputsRow>
            <RowItem>
              <SelectInputField 
                title="Last Interview Phase"
                options={lastPhaseOptions} 
                selectedValue={selectedLastPhase}
                onSelect={(value) => setSelectedLastPhase(value as LastPhase)}             
              />
            </RowItem>
            <RowItem>
              <SelectInputField
                isDisabled={selectedLastPhase === 'Offer'}
                title="Next Interview Phase"
                options={nextPhaseOptions} 
                selectedValue={selectedNextPhase as string}
                onSelect={(value) => setSelectedNextPhase(value as NextPhase)}             
              />
            </RowItem>
          </InputsRow>
        </CreateApplicationDialogContent>
      </Dialog>
  )
}

const WithStoreConnection = () => {
  const closeDialog = useCloseDialog();
  const company = useCompany();
  const role = useRole();
  const interviewPhases = useInterviewPhases();
  const selectedLastPhase = useSelectedLastPhase();
  const selectedNextPhase = useSelectedNextPhase();
  const selectedHybridness = useSelectedHybridness();
  const hybridnessOptions = useHybridnessOptions();
  const setCompany = useSetCompany();
  const setRole = useSetRole();
  const setSelectedLastPhase = useSetSelectedLastPhase();
  const setSelectedNextPhase = useSetSelectedNextPhase();
  const setSelectedHybridness = useSetSelectedHybridness();
  const createApplication = useCreateApplication();
  const resetData = useResetData();
  const isCreateButtonAllowed = company !== '' && role !== '';
  const lastPhaseOptions = interviewPhases.filter(phase => phase !== 'N/A');
  const nextPhaseOptions = interviewPhases.filter(phase => phase !== 'Applied');
  
  const handleCreateApplication = () => {
    createApplication({
      id: new Date().toUTCString(),
      company,
      role,
      totalPhases: [],
      hybridness: selectedHybridness,
      createdAt: new Date().getTime(),
      lastInteraction: new Date().getTime(),
      lastPhase: selectedLastPhase,
      nextPhase: selectedNextPhase,
      disabled: false,
    })
    resetData();
    closeDialog();
  }

  return <CreateApplicationDialog
    company={company}
    setCompany={setCompany}
    role={role}
    setRole={setRole}
    lastPhaseOptions={lastPhaseOptions}
    nextPhaseOptions={nextPhaseOptions}
    selectedLastPhase={selectedLastPhase}
    setSelectedLastPhase={setSelectedLastPhase}
    selectedNextPhase={selectedNextPhase}
    setSelectedNextPhase={setSelectedNextPhase}
    selectedHybridness={selectedHybridness}
    setSelectedHybridness={setSelectedHybridness}
    hybridnessOptions={hybridnessOptions}
    isCreateButtonAllowed={isCreateButtonAllowed}
    handleCreateApplication={handleCreateApplication}
  />;
}

export default WithStoreConnection;
