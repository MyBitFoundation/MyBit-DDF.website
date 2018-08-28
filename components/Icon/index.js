import React from 'react';
import { Icon as IconAnt } from 'antd';
import StyledIconRight from './StyledIconRight';

const Icon = (props) => {
  if(props.isRight){
    return (
      <StyledIconRight type={props.type} />
    )
  }
  else {
    return (
      <IconAnt type={props.type} />
    )
  }
}

export default Icon;
