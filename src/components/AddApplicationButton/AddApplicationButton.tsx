import React from 'react'
import Button from '../Button/Button'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components';
import { useShowDialog } from '../../model/stores/dialog-store';

const PlusIcon = styled(FaPlus)`
  fill: #fff;
`

const AddApplicationButton: React.FC = () => {
  const showDialog = useShowDialog();

  return (
    <Button
      text='Add Application'
      icon={<PlusIcon />}
      color='#fff'
      onClick={() => showDialog('createApplicationDialog')}
    />
  )
}

export default AddApplicationButton
