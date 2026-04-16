import React from 'react'
import type { SideBarOptionProps } from './SideBarOption'
import { MdOutlineDashboard } from 'react-icons/md';
import { BsSuitcaseLg } from 'react-icons/bs';
import SideBarOption from './SideBarOption';
import { PiNetwork } from 'react-icons/pi';
import { useCurrentRoute } from '../../hooks/useCurrentRoute';
import AppVersion from '../AppVersion/AppVersion';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../model/stores/store-hooks';
import { motion } from 'motion/react';
import { closeSideBar } from '../../model/stores/sidebar-slice';

const SideBarContainer = styled.div<{isOpen: boolean}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background-color: #FFFFFF;
  width: 200px;
  transition: transform 0.3s ease-in-out;

  
  ${({ theme, isOpen }) => `
    ${theme.dimensions.mobile} {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      z-index: 1000;
      // transform: translateX(-200px);
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
      transform: translateX(${isOpen ? '0' : '-200px'})
    }
  `}
`

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SideBarBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: brightness(0.8);
  z-index: 999;
`

const SideBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.sideBar.isOpen);
  const currentRoute = useCurrentRoute();
  const sideBarOptions = [
    {
      label: 'Dashboard',
      icon: <MdOutlineDashboard />,
      isActive: currentRoute === '/',
      path: '/',
    },
    {
      label: 'My Applications',
      icon: <BsSuitcaseLg />,
      isActive: currentRoute === '/my-applications',
      path: '/my-applications',
    },
    {
      label: 'Networking',
      icon: <PiNetwork />,
      isActive: currentRoute === '/networking',
      path: '/networking',
    },
  ] as const satisfies SideBarOptionProps[];

  const handleCloseSideBar = () => dispatch(closeSideBar())
  
  return (
    <>
      {isOpen && <SideBarBackdrop onClick={handleCloseSideBar} />}
      <SideBarContainer isOpen={isOpen}>
        <UpperSection>
          {sideBarOptions.map(option => <div onClick={handleCloseSideBar}><SideBarOption key={option.label} {...option} /></div>)}
        </UpperSection>
        <AppVersion />
      </SideBarContainer>
    </>
  )
}

export default SideBar
