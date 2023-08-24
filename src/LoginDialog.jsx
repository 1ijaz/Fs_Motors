import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Login } from './Login'; // Path to your Login component

const LoginDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Login />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
