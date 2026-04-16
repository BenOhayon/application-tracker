import React, { useState } from 'react'
import styled from 'styled-components';
import ImageBox from '../ImageBox/ImageBox';

// interface ApplicationSearchInputProps {
//   value: string;
//   onChange: (value: string) => void;
// }

const ApplicationSearchInputContainer = styled.div`
  width: 256px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #F9FAFB;
  border: 1px solid #E5E7EB;
  padding: 4px 7px;
  border-radius: 5px;
`

const ApplicationSearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: transparent;
`

// const ApplicationSearch: React.FC<ApplicationSearchInputProps> = ({ value, onChange }) => {
const ApplicationSearch: React.FC = () => {
  const [search, setSearch] = useState(''); // TODO remove this when connecting it to real data

  return (
    <ApplicationSearchInputContainer>
      <ImageBox src="assets/search_icon.svg" alt="search icon" />
      <ApplicationSearchInput type='text' placeholder='Search applications...' value={search} onChange={(e) => setSearch(e.target.value)}/>
    </ApplicationSearchInputContainer>
  )
}

export default ApplicationSearch
