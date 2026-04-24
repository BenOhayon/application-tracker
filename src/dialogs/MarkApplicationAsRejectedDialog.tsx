import React from 'react'
import Dialog from '../components/Dialog/Dialog'
import styled from 'styled-components';
import { markApplicationAsRejected } from '../model/stores/application-slice';
import { useAppDispatch } from '../model/stores/store-hooks';
import type { ApplicationData } from '../utils/types';
import AlertMessage from '../components/AlertMessage/AlertMessage';
import { useCloseDialog } from '../model/stores/dialog-store';
import { useApplicationForRejectCompany, useApplicationForRejectId } from '../model/stores/mark-application-as-rejected-dialog-store';

interface MarkApplicationAsRejectedDialogProps {
  applicationCompany: ApplicationData['company'] | null;
  handleConfirmRejection: () => void;
}

const MarkApplicationAsRejectedDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MarkApplicationAsRejectedDialogText = styled.p`
  color: #566166;
  font-size: 14px;
`;

const MarkApplicationAsRejectedDialog: React.FC<MarkApplicationAsRejectedDialogProps> = ({
  applicationCompany,
  handleConfirmRejection,
}) => {
  return (
    <Dialog
      variant='danger'
      title='Mark as rejected?'
      confirmButtonText='Confirm Rejection'
      onConfirmButtonClick={handleConfirmRejection}
      >
        <MarkApplicationAsRejectedDialogContent>
          <MarkApplicationAsRejectedDialogText>Are you sure you want to mark the application for <strong>{applicationCompany}</strong> as rejected? This will move it to inactive section of your tracker.</MarkApplicationAsRejectedDialogText>
          <AlertMessage
            type='warning'
            title='This action cannot be undone!'
          />
        </MarkApplicationAsRejectedDialogContent>
      </Dialog>
  )
}

const WithStoreConnection = () => {
  const dispatch = useAppDispatch();
  const closeDialog = useCloseDialog();
  const company = useApplicationForRejectCompany();
  const id = useApplicationForRejectId();

  const handleConfirmRejection = () => {
    dispatch(markApplicationAsRejected({ company, id }));
    closeDialog();
  }

  return <MarkApplicationAsRejectedDialog
    applicationCompany={company}
    handleConfirmRejection={handleConfirmRejection}
  />;
}

export default WithStoreConnection;
