import React from 'react'
import styled from 'styled-components'

const LoaderCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  border-top: none;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderCircle />
  )
}

export default Loader
