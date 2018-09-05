/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tooltip from 'antd/lib/tooltip';
import StyledButton from './StyledButton';
import Anchor from './Anchor';
import 'antd/lib/tooltip/style';

function Button({ children, size, styling, handleRoute, linkTo, isActive, href, hasTooltip, tooltipTitle, pointArrowAtCenter, tooltipPlacement, disabled = false}) {
  // Render an anchor tag
  let button = (
    <Anchor href={href} target='_blank' rel='noopener noreferrer'>
      <StyledButton size={size} styling={styling} disabled={disabled}>
        {Children.toArray(children)}
      </StyledButton>
    </Anchor>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (handleRoute) {
    button = (
      <StyledButton size={size} onClick={handleRoute} styling={styling} handleRoute={handleRoute} disabled={disabled}>
        {Children.toArray(children)}
      </StyledButton>
    );
  }
  //internal navigation
  else if(linkTo){
    button = (
      <Link to={linkTo}>
        <StyledButton size={size} styling={styling} isActive={isActive} disabled={disabled}>
          {Children.toArray(children)}
        </StyledButton>
      </Link>
    )
  }

  if(hasTooltip){
    button = (
      <Tooltip
        title={tooltipTitle}
        arrowPointAtCenter={pointArrowAtCenter}
        placement={tooltipPlacement}
      >
        {button}
      </Tooltip>
    )
  }

  return button;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  size: PropTypes.string
};

export default Button;
