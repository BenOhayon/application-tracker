import { useAppSelector } from '../model/stores/store-hooks';
import { dialogs } from './dialogs';
import type React from 'react';

export const DialogProvider: React.FC = () => {
  const stack = useAppSelector((state) => state.dialogs.stack);

  return (
    <>
      {stack.map((dialog) => dialogs[dialog.id])}
    </>
  );
};