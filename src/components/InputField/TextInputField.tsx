import React from 'react'
import styled from 'styled-components';
import InputField, { type InputFieldProps } from './InputField';

interface TextInputFieldProps extends Omit<InputFieldProps, 'children'> {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  background-color: transparent;

  &::placeholder {
    color: #717c827d;
  }
`;

const TextInputField: React.FC<TextInputFieldProps> = ({
  title,
  isRequired,
  icon,
  helperText,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputField 
      title={title}
      isRequired={isRequired}
      icon={icon}
      helperText={helperText}  
    >
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputField>
  )
}

export default TextInputField
