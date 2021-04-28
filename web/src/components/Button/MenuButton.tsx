import { MouseEvent, ReactElement, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';

import { IconButton } from 'components/Button';

export interface MenuButtonProps {
  /**
   * Options
   */
  options: Array<{ onClick: () => void; name: string }>;
}

const MenuButton = ({ options }: MenuButtonProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        icon={<MoreIcon />}
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {options.map(({ onClick, name }) => (
          <MenuItem
            key={name}
            onClick={() => {
              onClick();
              handleClose();
            }}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
