import React from 'react'
import Button from '../Button/Button'
import { FaPlus } from 'react-icons/fa'
import { showDialog } from '../../model/stores/dialog-slice';
import styled from 'styled-components';
import { useAppDispatch } from '../../model/stores/store-hooks';
import { useIsMobile } from '../../hooks/is-mobile';

const PlusIcon = styled(FaPlus)`
  fill: #fff;
`

const AddApplicationButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  return (
    <Button
      text={`${!isMobile ? 'Add Application' : ''}`}
      icon={<PlusIcon />}
      color='#fff'
      onClick={() => dispatch(showDialog('createApplicationDialog'))}
    />
  )
}

export default AddApplicationButton
