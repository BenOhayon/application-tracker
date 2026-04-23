import React from 'react'
import Button from '../Button/Button'
import { useCloseDialog } from '../../model/stores/dialog-store';

const DialogCancelButton: React.FC = () => {
  const closeDialog = useCloseDialog();

  return (
    <Button text='Cancel' variant='ghost' color='#566166' onClick={() => closeDialog()} />
  )
}

export default DialogCancelButton
