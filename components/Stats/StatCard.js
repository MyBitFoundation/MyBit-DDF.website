import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {TextRow} from 'react-placeholder/lib/placeholders';
import StyledStatCard from './StyledStatCard';
import StyledValue from './StyledValue';
import StyledTitle from './StyledTitle';
import StyledLoadingPlaceholder from './StyledLoadingPlaceholder';

const StatCard = ({stat}) => {
  return (
    <StyledStatCard>
      <StyledTitle>{stat.name}</StyledTitle>
      <StyledLoadingPlaceholder>
        <ReactPlaceholder type='textRow' ready={stat.value != undefined ? true : false} color='#E0E0E0' showLoadingAnimation style={{width: stat.loadingSize + "px", height: "21px"}}>
          <StyledValue>{stat.value}</StyledValue>
        </ReactPlaceholder>
      </StyledLoadingPlaceholder>
    </StyledStatCard>
  )
}

export default StatCard;
