import React, { ReactNode, ReactElement } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

export interface FormDialogProps {
  /**
   * content
   */
  content?: string;
  /**
   * fields
   */
  fields: Array<{ [key: string]: string | number | Date }>;
  /**
   * open button
   */
  openButton?: ReactNode;
  /**
   * title
   */
  title: string;
}

const FormDialog = ({
  content,
  fields,
  openButton,
  title,
}: FormDialogProps): ReactElement => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const OpenButton = openButton;

  return (
    <>
      {openButton && <OpenButton onClick={handleClickOpen} />}
      {!openButton && (
        <Button color="primary" variant="outlined">
          Open
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {fields.map(({ id, name }) => (
            <TextField
              id={id as string}
              label={name}
              margin="dense"
              fullWidth
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
