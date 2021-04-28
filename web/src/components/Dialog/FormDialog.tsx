import React, { ReactElement } from 'react';
import {
  Box,
  BoxProps,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from '@material-ui/core';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { FormField } from 'components/Inputs';
import { FieldType, KeyValuePairs, SelectOptionType } from 'types';

export type FormDialogProps = {
  /**
   * Props for the container (Box)
   */
  containerProps?: BoxProps;
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
  open?: boolean;
  /**
   * Save/update/upsert function
   */
  onSubmit: (variables: KeyValuePairs) => void;
  /**
   * Button that opens dialog
   */
  openButton?: ReactElement;
  /**
   * Read / load values
   */
  read?: () => void;
  /**
   * Dialog size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Dialog title
   */
  title: string;
  /**
   * Initial form values (e.g. if editing)
   */
  values?: { [key: string]: unknown };
  /**
   * Default variant for fields
   */
  variant?: 'standard' | 'outlined' | 'filled';
};

/**
 * A dialog box with a form
 */
const FormDialog = ({
  containerProps,
  content,
  fields,
  open: defaultOpen = false,
  onSubmit,
  openButton,
  read,
  size,
  title,
  values = {},
  variant,
  ...props
}: FormDialogProps & Partial<DialogProps>): ReactElement => {
  const [open, setOpen] = React.useState(defaultOpen);
  const [form, setForm] = React.useState(values);

  useDeepCompareEffect(() => {
    setForm(values);
  }, [values]);

  const handleOpen = () => {
    if (read) {
      read();
    }
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
      onClick: handleOpen,
    },
  );

  const handleUpdate = () => {
    onSubmit({ variables: { input: form } });
    setForm({});
    handleClose();
  };

  return (
    <Box {...containerProps}>
      {!defaultOpen && OpenButton}
      <Dialog
        {...props}
        aria-labelledby="title"
        fullWidth={Boolean(size)}
        maxWidth={size}
        open={open}
        onClose={handleClose}>
        <DialogTitle id="title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {fields.map((f) => (
            <FormField
              {...f}
              form={form}
              key={f.id}
              setForm={setForm}
              variant={variant}
            />
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
