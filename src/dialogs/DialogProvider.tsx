import { useDialogStoreStack } from '../model/stores/dialog-store';
import { dialogs } from './dialogs';
import type React from 'react';

export const DialogProvider: React.FC = () => {
  const stack = useDialogStoreStack();

  return (
    <>
      {stack.map((dialog) => dialogs[dialog.id])}
    </>
  );
};