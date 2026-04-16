import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface SideBarOptionProps {
  label: string;
  icon: React.ReactElement;
  isActive?: boolean;
  path: string;
}

const SideBarOptionContainer = styled.div<Pick<SideBarOptionProps, 'isActive'>>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${({ isActive }) => isActive ? '#3F51B5' : 'transparent'};
  border: 1px solid transparent;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    border-color: #3F51B5;
  }
`

const SideBarOptionIcon = styled.div<Pick<SideBarOptionProps, 'isActive'>>`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isActive }) => isActive ? `
    & svg {
      fill: white;
    }
  ` : `
    & svg {
      fill: #566166;
    }
  `}

  & svg {
    width: 100%;
    height: 100%;
    transition: fill 0.2s ease-in-out;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const SideBarOptionLabel = styled.span<Pick<SideBarOptionProps, 'isActive'>>`
  font-size: 14px;
  color: ${({ isActive }) => isActive ? '#ffffff' : '#566166'};
  transition: color 0.2s ease-in-out;
`

const SideBarOption: React.FC<SideBarOptionProps> = ({ 
  label, 
  icon, 
  isActive = false, 
  path 
}) => {
  return (
    <StyledLink to={path}>
      <SideBarOptionContainer isActive={isActive}>
        <SideBarOptionIcon isActive={isActive}>
          {icon}
        </SideBarOptionIcon>
        <SideBarOptionLabel isActive={isActive}>{label}</SideBarOptionLabel>
      </SideBarOptionContainer>
    </StyledLink>
  )
}

export default SideBarOption
