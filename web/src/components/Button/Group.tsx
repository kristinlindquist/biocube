import { ReactElement } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

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
  color?: 'primary' | 'secondary';
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
  /**
   * Button variant
   */
  variant?: 'contained' | 'outlined' | 'text';
}

/**
 * A group of buttons, appropriate when multiple
 * related actions can be taken.
 */
const Group = ({
  buttons,
  color = 'primary',
  label = 'button group',
  selected,
  variant = 'outlined',
  ...props
}: GroupProps): ReactElement => (
  <ButtonGroup
    {...props}
    aria-label={label}
    color={color}
    size="small"
    value={selected}
    variant={variant}>
    {buttons.map(({ label: bLabel, onClick }) => (
      <Button key={bLabel} onClick={onClick} value={bLabel.toLowerCase()}>
        {bLabel}
      </Button>
    ))}
  </ButtonGroup>
);

export default Group;
