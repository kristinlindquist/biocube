import { ReactElement } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/core';

export interface ToggleGroupProps {
  /**
   * array describing buttons
   */
  buttons: Array<{ label: string; onClick?: () => void | null }>;
  /**
   * class
   */
  className: string;
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
 * A toggle group of buttons, appropriate when selecting
 * one of a couple states.
 */
const ToggleGroup = ({
  buttons,
  label = 'button group',
  selected,
  ...props
}: ToggleGroupProps): ReactElement => (
  <ToggleButtonGroup
    {...props}
    aria-label={label}
    size="small"
    value={selected}>
    {buttons.map(({ label: bLabel, onClick }) => (
      <ToggleButton key={bLabel} onClick={onClick} value={bLabel.toLowerCase()}>
        {bLabel}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export default ToggleGroup;
