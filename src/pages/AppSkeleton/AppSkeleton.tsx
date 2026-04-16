import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import { DialogProvider } from '../../dialogs/DialogProvider'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 16px;
  flex-grow: 1;
  padding-top: 24px;
`

const AppContent = styled.div`
  display: flex;
  height: 100%;
`

const AppSkeleton: React.FC = () => {
  return (
    <AppContainer>
      <NavBar />
      <AppContent>
        <SideBar />
        <PageContainer>
          <Outlet />
        </PageContainer>
        <DialogProvider />
      </AppContent>
    </AppContainer>
  )
}

export default AppSkeleton
