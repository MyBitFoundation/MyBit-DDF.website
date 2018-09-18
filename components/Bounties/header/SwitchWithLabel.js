import StyledSwitchWithLabel from './StyledSwitchWithLabel';
import Switch from '../../Switch';
import StyledLabelForSwitch from './StyledLabelForSwitch';

const SwitchWithLabel = ({size, checked, handleClick, stylingSwitch, styling, onChange, label}) => {
  return (
    <StyledSwitchWithLabel styling={stylingSwitch}>
      <Switch
        size="small"
        checked={checked}
        styling={styling}
        onChange={checked => handleClick(checked)}
      />
      <StyledLabelForSwitch>
        {label}
      </StyledLabelForSwitch>
    </StyledSwitchWithLabel>
  )
}

export default SwitchWithLabel;
