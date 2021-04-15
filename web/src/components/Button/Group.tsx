import { ReactElement } from 'react';
import {
  ToggleButton as Button,
  ToggleButtonGroup as ButtonGroup,
} from '@material-ui/core';

export interface GroupProps {
  /**
   * array describing buttons
   */
  buttons: Array<{ label: string; onClick?: () => void | null }>;
  /**
   * class
   */
  className: string;
  /**
   * Button color
   */
  color?: 'primary' | 'secondary' | 'standard';
  /**
   * Button label
   */
  label?: string;
  /**
   * Stacking orientation
   */
  orientation: 'horizontal' | 'vertical';
  /**
   * which button is selected, if any
   */
  selected: string;
}

/**
 * A group of buttons.
 */
const Group = ({
  buttons,
  color = 'primary',
  label = 'button group',
  selected,
  ...props
}: GroupProps): ReactElement => (
  <ButtonGroup
    {...props}
    aria-label={label}
    color={color}
    size="small"
    value={selected}>
    {buttons.map(({ label: bLabel, onClick }) => (
      <Button key={bLabel} onClick={onClick} value={bLabel.toLowerCase()}>
        {bLabel}
      </Button>
    ))}
  </ButtonGroup>
);

export default Group;
