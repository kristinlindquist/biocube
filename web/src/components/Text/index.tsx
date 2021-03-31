import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: 'auto',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));

export interface DividerProps {
  /**
   * text
   */
  text: string;
}

export const Divider = ({ text, ...props }: DividerProps): ReactElement => {
  const classes = useStyles();

  return (
    <Typography className={classes.divider} {...props}>
      {text}
    </Typography>
  );
};
