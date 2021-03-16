import { ReactElement } from 'react';
import { Fab as MaterialFab } from '@material-ui/core';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

export type FabProps = {
  /**
   * position
   */
  position?: 'fixed';
  /**
   * icon
   */
  icon?: ReactElement;
  /**
   * label
   */
  label?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    fixed: {
      position: 'fixed',
      bottom: 25,
      right: 25,
    },
  }),
);

const Fab = ({
  icon,
  label = 'add',
  position = 'fixed',
  ...props
}: FabProps): ReactElement => {
  const classes = useStyles();
  return (
    <MaterialFab
      className={clsx({ [classes.fixed]: position === 'fixed' })}
      color="primary"
      {...props}
      aria-label={label}>
      {icon || <AddIcon />}
    </MaterialFab>
  );
};

export default Fab;
