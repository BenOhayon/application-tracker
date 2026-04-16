import React, { type CSSProperties } from 'react'
import styled, { css } from 'styled-components';
import Loader from '../Loader/Loader';

interface ButtonProps {
  text?: string;
  icon?: React.ReactElement;
  backgroundColor?: string;
  isProcessing?: boolean;
  isDisabled?: boolean;
  color?: CSSProperties['color'];
  variant?: 'primary' | 'ghost' | 'dashed';
  onClick?: () => void;
}

const primaryStyle = (backgroundColor: ButtonProps['backgroundColor']) => css`
  background-color: ${backgroundColor};
  
  &:hover {
    filter: 'brightness(0.9)',
  }

  &:active {
    filter: 'brightness(0.8)',
  }
`;

const ghostStyle = css`
  background-color: transparent;

  & > #button-text:hover {
    filter: brightness(0.9);
  }
`;

const dashedStyle = css`
  background-color: transparent;
  border: 1px dashed #566166;

  & > #button-text:hover {
    filter: brightness(0.9);
  }
`;

const renderButtonStyle = (variant: ButtonProps['variant'], backgroundColor: ButtonProps['backgroundColor']) => {
  switch(variant) {
    case 'primary':
      return primaryStyle(backgroundColor);
    case 'ghost':
      return ghostStyle;
    case 'dashed':
      return dashedStyle;
    default:
      return primaryStyle(backgroundColor);
  }
}

const StyledButton = styled('button')<Pick<ButtonProps, 'backgroundColor' | 'variant' | 'isDisabled'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  ${({ isDisabled }) => isDisabled && `
    pointer-events: none;
    opacity: .5;
  `}
  ${({ variant, backgroundColor }) => renderButtonStyle(variant, backgroundColor)}
`;

const StyledButtonText = styled('p')<Pick<ButtonProps, 'color'>>(({ color }) => ({
  color,
  fontWeight: 500,
}))

const StyledIconContainer = styled.div`
  flex-shrink: 0;
`

const Button: React.FC<ButtonProps> = ({ 
  text = '', 
  icon, 
  isProcessing,
  isDisabled = false,
  variant = 'primary', 
  backgroundColor = '#3F51B5', 
  color = '#ffffff', 
  onClick 
}) => {
  return (
    <StyledButton isDisabled={isDisabled} variant={variant} backgroundColor={backgroundColor} onClick={onClick}>
      { 
        isProcessing ? <Loader /> : <>
          {icon && (
            <StyledIconContainer>
              {icon}
            </StyledIconContainer>
          )}
          {text && <StyledButtonText id='button-text' color={color}>
            {text}
          </StyledButtonText>}
        </>
      }
    </StyledButton>
  )
}

export default Button
