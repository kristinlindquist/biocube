import React, { ReactElement } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { SpacingProps } from '@material-ui/system';

import { FormField } from 'components/Inputs';
import { FieldType, SelectOptionType } from 'types';

export interface FormDialogProps {
  /**
   * Text content to display above the form fields.
   */
  content?: string;
  /**
   * Form fields
   */
  fields: Array<{
    id: string;
    name: string;
    options?: SelectOptionType[];
    type?: FieldType;
  }>;
  /**
   * Save/update/upsert function
   */
  onSubmit: (input: { [key: string]: unknown }) => void;
  /**
   * Button that opens dialog
   */
  openButton?: ReactElement;
  /**
   * Dialog title
   */
  title: string;
  /**
   * Initial form values (e.g. if editing)
   */
  values?: { [key: string]: unknown };
}

/**
 * A dialog box with a form
 */
const FormDialog = ({
  content,
  fields,
  onSubmit,
  openButton,
  title,
  values = {},
  ...props
}: FormDialogProps & SpacingProps): ReactElement => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(values);

  useDeepCompareEffect(() => {
    setForm(values);
  }, [values]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const OpenButton = React.cloneElement(
    openButton || (
      <Button color="primary" variant="outlined">
        Open
      </Button>
    ),
    {
      onClick: handleClickOpen,
    },
  );

  const handleUpdate = () => {
    onSubmit({ variables: { input: form } });
    setForm({});
    handleClose();
  };

  return (
    <Box {...props}>
      {OpenButton}
      <Dialog aria-labelledby="dialog-title" open={open} onClose={handleClose}>
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {fields.map((f) => (
            <FormField {...f} form={form} setForm={setForm} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FormDialog;
