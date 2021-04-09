import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export type HeaderProps = {
  /**
   * Main page title
   */
  title: string;
};

const Header = ({ title }: HeaderProps): ReactElement => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="menu"
          className={classes.menu}
          color="inherit"
          edge="start">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
