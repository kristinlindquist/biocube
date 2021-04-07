import { ReactElement, useRef, useState } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';

import { SelectOptionType as OptionType } from 'types';

export interface DropdownProps {
  /**
   * button options
   */
  options: OptionType[];
  /**
   * button label
   */
  label: string;
  /**
   * optional callback on select
   */
  onSelect?: (selection: OptionType) => unknown;
}

const defaultOptions = [
  { id: 'option1', name: 'Option 1' },
  { id: 'option2', name: 'Option 2' },
];

/**
 * A button that triggers a dropdown. Upon selection,
 * onSelect is triggered. Good for adding, say,
 * filters on the query builder.
 */
const Dropdown = ({
  label = 'Select...',
  options = defaultOptions,
  onSelect = () => {},
}: DropdownProps): ReactElement => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleSelect = (_, index: number) => {
    onSelect(options[index]);
    setOpen(false);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        aria-label="split button"
        color="primary"
        ref={anchorRef}
        variant="contained">
        <Button onClick={() => setOpen(true)}>{label}</Button>
      </ButtonGroup>
      <Popper anchorEl={anchorRef.current} open={open} transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map(({ name }, index) => (
                    <MenuItem
                      key={name}
                      onClick={(event) => handleSelect(event, index)}>
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Dropdown;
