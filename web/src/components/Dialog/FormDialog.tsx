import React, { ReactElement } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { SpacingProps } from '@material-ui/system';
import { get } from 'lodash';

import { Select } from 'components/Inputs';

export interface FormDialogProps {
  /**
   * Text content to display above the form fields.
   */
  content?: string;
  /**
   * Form fields
   */
  fields: Array<{
    id: string | number;
    name: string;
    options?: Array<{ id: string | number; name: string }>;
    type?:
      | 'date'
      | 'dateTime'
      | 'element'
      | 'number'
      | 'multiple'
      | 'string'
      | 'text';
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
    handleClose();
  };

  return (
    <Box {...props}>
      {OpenButton}
      <Dialog aria-labelledby="dialog-title" open={open} onClose={handleClose}>
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {fields.map(({ id, name, options, type }) => (
            <React.Fragment key={id}>
              {options && (
                <Select
                  defaultValue={((form[id] || []) as Array<{
                    id: string | number;
                  }>).map(({ id: sId }) => sId)}
                  fullWidth
                  label={name}
                  multiple={type === 'multiple'}
                  onSelect={(selection) =>
                    setForm({ ...form, [id]: selection })
                  }
                  options={options}
                />
              )}
              {!options && (
                <TextField
                  fullWidth
                  id={id as string}
                  label={name}
                  margin="dense"
                  onChange={(e) =>
                    setForm({ ...form, [id]: get(e, 'target.value') })
                  }
                  value={form[id]}
                />
              )}
            </React.Fragment>
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
