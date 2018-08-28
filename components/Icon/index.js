import React from 'react';
import { Icon as IconAnt } from 'antd';
import StyledIconRight from './StyledIconRight';

const Icon = (props) =>
  props.isRight ? <StyledIconRight type={props.type} />
  : <IconAnt type={props.type} />

export default Icon;
