import React from 'react'
import styled from 'styled-components'
import ImageBox from '../ImageBox/ImageBox'
import AddApplicationButton from '../AddApplicationButton/AddApplicationButton'
import { useIsMobile } from '../../hooks/is-mobile'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaPlus } from 'react-icons/fa'
import { useShowDialog } from '../../model/stores/dialog-store'
import { useOpenSideBar } from '../../model/stores/sidebar-store'

const NavBarContainer = styled.nav`
  box-sizing: border-box;
  height: 60px;
  padding: 7px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E5E7EB;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 10;
`

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const NavBarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const AppTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`

const MenuImage = styled(HiOutlineMenu)`
  width: 20px;
  height: 20px;
`

const CreateApplicationButton = styled(FaPlus)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 3px;
  border: 2px solid black;
`

const NavBar: React.FC = () => {
  const isMobile = useIsMobile();
  const openSideBar = useOpenSideBar();
  const showDialog = useShowDialog();
  const showCreateApplicationDialog = () => showDialog('createApplicationDialog');
  
  return (
    <NavBarContainer>
      <NavBarLeft>
        <NavBarLogoContainer>
          {isMobile ? <MenuImage onClick={openSideBar} /> : <ImageBox src='assets/logo.svg' alt='logo image' />}
          <AppTitle>ApplicationTracker</AppTitle>
        </NavBarLogoContainer>
      </NavBarLeft>
      {isMobile ? <CreateApplicationButton onClick={showCreateApplicationDialog} /> : <AddApplicationButton />}
    </NavBarContainer>
  )
}

export default NavBar
