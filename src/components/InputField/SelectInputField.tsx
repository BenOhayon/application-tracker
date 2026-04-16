import React from 'react'
import styled from 'styled-components';
import InputField, { type InputFieldProps } from './InputField';

interface SelectInputFieldProps extends Omit<InputFieldProps, 'children'> {
  placeholder?: string;
  options: string[];
  selectedValue: string;
  isDisabled?: boolean;
  onSelect: (value: string) => void;
}

const SelectInput = styled.select`
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: transparent;
  color: #2A3439;
  cursor: pointer;

  &::placeholder {
    color: #717c827d;
  }
`;

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  title,
  isRequired,
  icon,
  helperText,
  options,
  selectedValue,
  isDisabled = false,
  onSelect,
}) => {
  return (
    <InputField
      title={title}
      isRequired={isRequired}
      icon={icon}
      helperText={helperText}  
    >
      <SelectInput 
        disabled={isDisabled}
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </SelectInput>
    </InputField>
  )
}

export default SelectInputField
