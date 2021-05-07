import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { Select, TextField } from 'components/Inputs';
import { getDocument, getEntityPath } from 'utils';
import {
  FieldType,
  isSelectFieldType as isSelectType,
  SelectOptionType,
} from 'types';

export interface FormFieldProps {
  /**
   * Form state
   */
  form: { [key: string]: unknown };
  /**
   * Field Id
   */
  id: string;
  /**
   * Field Name
   */
  name: string;
  /**
   * Options
   */
  options?: SelectOptionType[];
  /**
   * Function to set form state
   */
  setForm: (form: { [key: string]: unknown }) => void;
  /**
   * Field type
   */
  type?: FieldType;
  /**
   * variant for fields
   */
  variant?: 'filled' | 'outlined' | 'standard';
}

/**
 * A form field of various types, with state management
 * and dynamic pulling of options (if select).
 */
const FormField = ({
  form,
  id,
  name,
  options,
  setForm,
  type,
}: FormFieldProps): ReactElement => {
  let myOptions = options || [];

  if (isSelectType(type) && !options) {
    const docName = `Get${id}Document`;
    const doc = getDocument(docName);

    if (doc) {
      const { data: d } = useQuery(doc, {
        fetchPolicy: 'standby',
        variables: { input: {} },
      });
      myOptions = (get(d, getEntityPath(docName)) || []).map((o) => ({
        id: o.id,
        name: o.name,
      }));
    }
  }

  return (
    <React.Fragment key={id}>
      {isSelectType(type) && (
        <Select
          defaultValue={((form[id] || []) as Array<{
            id: string | number;
          }>).map(({ id: sId }) => sId)}
          fullWidth
          label={name}
          multiple={type === 'multiple'}
          onSelect={(selection) => setForm({ ...form, [id]: selection })}
          options={myOptions}
        />
      )}
      {!isSelectType(type) && (
        <TextField
          fullWidth
          id={id as string}
          label={name}
          margin="dense"
          multiline={type === 'text'}
          onChange={(val) => setForm({ ...form, [id]: val })}
          value={form[id]}
        />
      )}
    </React.Fragment>
  );
};

export default FormField;
