import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdWarningAmber } from 'react-icons/md';
import styled, { css } from 'styled-components';
import type { AtLeastOne } from '../../utils/types';

type AlertMessageProps = AtLeastOne<{ title: string }, { message: string }> & {
  type: 'error' | 'info' | 'warning';
}

const iconStyle = css`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
`;

const InfoIcon = styled(IoMdInformationCircleOutline)`
  ${iconStyle}
  color: #3F51B5;
`;

const WarnignIcon = styled(MdWarningAmber)`
  ${iconStyle}
  color: #D97706;
`;

const getAlertPropertiesByType = (type: AlertMessageProps['type']) => {
  const infoAlertData = {
    borderColor: '#3F51B5',
    backgroundColor: '#3f51b515',
    textColor: '#566166',
    icon: <InfoIcon />
  }
  const warnignAlertData = {
    borderColor: '#FBBF24',
    backgroundColor: '#FFFBEB',
    textColor: '#92400E',
    icon: <WarnignIcon />,
  }

  switch (type) {
    case 'info': return infoAlertData;
    case 'warning': return warnignAlertData;
    default: return infoAlertData;
  }
}

const AlertMessageContainer = styled.div<Pick<AlertMessageProps, 'type'>>`
  display: flex;
  align-items: start;
  gap: 10px;
  padding: 15px 20px;
  background-color: #566166;
  border-left: 5px solid;
  ${({ type }) => ({ 
    borderLeftColor: getAlertPropertiesByType(type).borderColor,
    backgroundColor: getAlertPropertiesByType(type).backgroundColor,
    color: getAlertPropertiesByType(type).textColor,
  })}
`;

const AlertMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-self: center;
`;

const AlertMessageTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const AlertMessageText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const AlertMessage: React.FC<AlertMessageProps> = ({ title, message, type }) => {
  return (
    <AlertMessageContainer type={type}>
      {getAlertPropertiesByType(type).icon}
      <AlertMessageContent>
        {title && <AlertMessageTitle>{title}</AlertMessageTitle>}
        {message && <AlertMessageText>{message}</AlertMessageText>}
      </AlertMessageContent>
    </AlertMessageContainer>
  )
}

export default AlertMessage
