import React from 'react'
import styled from 'styled-components';

interface CheckboxProps {
  isChecked: boolean;
  onChecked: (value: boolean) => void;
  label: string;
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: fit-content;
`;

const CheckboxSquare = styled.input`
  &[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #2930b3;
  }
`;

const CheckboxLabel = styled.p`
  font-size: 14px;
`

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onChecked, label }) => {
  return (
    <CheckboxContainer onClick={() => onChecked(!isChecked)}>
      <CheckboxSquare type='checkbox' checked={isChecked} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  )
}

export default Checkbox
