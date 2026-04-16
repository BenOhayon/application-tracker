import React from 'react'
import Button from '../Button/Button'
import { useAppDispatch } from '../../model/stores/store-hooks';
import { closeDialog } from '../../model/stores/dialog-slice';

const DialogCancelButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Button text='Cancel' variant='ghost' color='#566166' onClick={() => dispatch(closeDialog())} />
  )
}

export default DialogCancelButton
