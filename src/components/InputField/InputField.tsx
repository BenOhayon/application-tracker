import React, { type ReactElement, type ReactNode } from 'react'
import styled from 'styled-components';

export interface InputFieldProps {
  title: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  icon?: ReactElement;
  helperText?: string;
  children: ReactNode;
}

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputFieldTitle = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const RequiredAsterisk = styled.span`
  &::after {
    content: '*';
    color: red;
    margin-left: 2px;
    font-size: 14px;
  }
`;

const InputFieldInputContainer = styled.div<Pick<InputFieldProps, 'isDisabled'>>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;  
  border: 1px solid #A9B4B9;
  border-radius: 5px;
  background-color: #F8F9FB;
  ${({ isDisabled }) => isDisabled && `
    background-color: #E0E0E0;
    cursor: not-allowed !important;
    --webkit-cursor: not-allowed;
  `}
`;

const HelperText = styled.p`
  font-size: 12px;
  color: red;
`;

const InputField: React.FC<InputFieldProps> = ({ 
  title, 
  isRequired,
  isDisabled,
  icon,
  helperText,
  children,
}) => {
  return (
    <InputFieldContainer>
      <InputFieldTitle>{title}{isRequired && <RequiredAsterisk />}</InputFieldTitle>
      <InputFieldInputContainer isDisabled={isDisabled}>
        {icon}
        {children}
      </InputFieldInputContainer>
      {helperText && <HelperText>{helperText}</HelperText>}
    </InputFieldContainer>
  )
}

export default InputField
