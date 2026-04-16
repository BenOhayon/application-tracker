import React from 'react'
import { version as appVersion } from '../../../package.json'
import styled from 'styled-components'

const VersionText = styled.p`
  font-size: 14px;
  color: #566166;
  opacity: .7;
  text-align: end;
`

const AppVersion: React.FC = () => {
  return (
    <VersionText>v{appVersion}</VersionText>
  )
}

export default AppVersion
