import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

const Dialogue = ({ open, handleClose, judul, sub, but1, but2, command }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        {judul && (
          <DialogTitle
            id='alert-dialog-title'
            style={{
              textAlign: 'center',
              color: '#4d4d4d',
              fontWeight: '600',
              fontSize: '1.3rem',
              fontFamily: 'cursive, sans-serif',
              paddingTop: '2rem',
              margin: '0 2rem',
            }}
          >
            {judul}
          </DialogTitle>
        )}

        {sub && (
          <DialogContent>
            <DialogContentText
              id='alert-dialog-description'
              style={{ textAlign: 'center', margin: '0 2rem' }}
            >
              {sub}
            </DialogContentText>
          </DialogContent>
        )}

        <DialogActions
          style={{ textAlign: 'center', justifyContent: 'center' }}
        >
          {but1 && (
            <Button
              color='success'
              style={{
                color: '#4d4d4d',
                backgroundColor: 'none',
                border: '1px solid #4d4d4d',
                padding: '.8rem',
                fontSize: '1rem',
                fontWeight: '400',
                borderRadius: '.5rem',
                textTransform: 'none',
                marginBottom: '1rem',
                width: '10rem',
              }}
              onClick={handleClose}
            >
              {but1}
            </Button>
          )}
          {but2 && (
            <Button
              style={{
                color: 'white',
                backgroundColor: '#47AF64',
                padding: '.8rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '400',
                borderRadius: '.5rem',
                textTransform: 'none',
                marginBottom: '1rem',
                width: '10rem',
              }}
              onClick={command}
            >
              {but2}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dialogue;
