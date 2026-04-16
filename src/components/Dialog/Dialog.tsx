import { type ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { IoClose } from 'react-icons/io5';
import { closeDialog } from '../../model/stores/dialog-slice';
import { motion } from 'motion/react';
import DialogCancelButton from './DialogCancelButton';
import { useAppDispatch } from '../../model/stores/store-hooks';
import { useIsMobile } from '../../hooks/is-mobile';

interface DialogProps {
  variant?: 'default' | 'danger';
  title: string;
  subtitle?: string;
  confirmButtonText?: string;
  isProcessing?: boolean;
  isConfirmButtonDisabled?: boolean;
  closeOnBackdropClick?: boolean;
  onConfirmButtonClick?: () => void;
  onClose?: () => void;
  children: ReactNode;
}

const DialogContainer = styled(motion.div)<{isMobile: boolean}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  padding: 0 40px 40px 40px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  
  ${({ isMobile }) => isMobile ? `
    width: calc(100% - 80px - 40px);
  ` : `
    min-width: 300px;
    max-width: 450px;
  `}
`;

const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 0 24px 0;
`;

const DialogTitle = styled.h2`
  color: #2A3439;
  font-size: 24px;
`;

const DialogSubtitle = styled.p`
  color: #566166;
  font-size: 14px;
`;

const DialogButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding-top: 40px;
`;

const DialogCloseButton = styled(IoClose)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
  color: #566166;
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: brightness(0.8);
  z-index: 999;
`;

// TODO - improve smoothness of animation of the dialog
const Dialog: React.FC<DialogProps> = ({
  variant = 'default',
  title, 
  subtitle, 
  isProcessing = false,
  onConfirmButtonClick, 
  confirmButtonText = 'Confirm',
  isConfirmButtonDisabled = false,
  closeOnBackdropClick = false,
  children 
}) => {
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();
  const handleCloseDialog = () => dispatch(closeDialog())

  return (
    <>
      <Backdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {...(closeOnBackdropClick && { onClick: handleCloseDialog })}
      />
      <DialogContainer
        initial={{ opacity: 0, scale: 0.9, y: '-50%', x: '-50%' }}
        animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
        exit={{ opacity: 0, scale: 0.9, y: '-50%', x: '-50%' }}
        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        isMobile={isMobile}
      >
        <DialogCloseButton onClick={handleCloseDialog} />
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogSubtitle>{subtitle}</DialogSubtitle>
        </DialogHeader>
        {children}
        <DialogButtonsContainer>
          <DialogCancelButton />
          <Button
            {...(variant === 'danger' && { backgroundColor: '#9E3F4E' })}
            isDisabled={isConfirmButtonDisabled} 
            isProcessing={isProcessing} 
            text={confirmButtonText} 
            variant='primary' 
            onClick={onConfirmButtonClick} 
          />
        </DialogButtonsContainer>
      </DialogContainer>
    </>
  );
};

export default Dialog;