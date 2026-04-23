import React from 'react'
import styled, { css } from 'styled-components'
import type { ApplicationData } from '../../utils/types'
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useAppDispatch } from '../../model/stores/store-hooks';
import { setApplicationCompany } from '../../model/stores/mark-application-as-rejected-dialog-slice';
import { useShowDialog } from '../../model/stores/dialog-store';

interface ApplicationActionsProps {
  applicationCompany: ApplicationData['company'];
  applicationId: ApplicationData['id'];
}

const ApplicationActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const actionStyles = css`
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #c0c0c0;
  }
`

// TODO - Implement edit functionality in the future...
// const EditButton = styled(MdOutlineModeEdit)`
//   ${actionStyles}
// `

const RejectButton = styled(IoMdCloseCircleOutline)`
  ${actionStyles}
`

const ApplicationActions: React.FC<ApplicationActionsProps> = ({
  applicationCompany,
  applicationId,
}) => {
  const dispatch = useAppDispatch();
  const showDialog = useShowDialog();
  const showMarkAsRejectedDialog = () => {
    dispatch(setApplicationCompany({ 
      company: applicationCompany, 
      id: applicationId 
    }));
    showDialog('markApplicationAsRejectedDialog');
  }

  return (
    <ApplicationActionsContainer>
      {/* TODO - Implement edit functionality in the future... */}
      {/* <EditButton /> */}
      <RejectButton onClick={showMarkAsRejectedDialog} />
    </ApplicationActionsContainer>
  )
}

export default ApplicationActions
