import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Login from './Login';
import SubNav from './SubNav';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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
    <AppBar color="primary" elevation={3} position="static">
      <Toolbar>
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          sx={{ pr: 4 }}>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <Login />
      </Toolbar>
      <Box sx={{ pl: 8 }}>
        <SubNav
          tabs={[
            { id: 'measures', label: 'Measures', to: '/measures' },
            { id: 'indications', label: 'Indications', to: '/indications' },
            { id: 'querybuilder', label: 'Query Builder', to: '/qb' },
          ]}
        />
      </Box>
    </AppBar>
  );
};

export default Header;
