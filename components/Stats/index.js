import React from 'react';
import StyledStats from './StyledStats';
import StatCard from './StatCard';

const getStat = stat => <StatCard stat={stat} />

const Stats = props => {
  return(
    <StyledStats>
      {props.stats.map(getStat)}
    </StyledStats>
  )
}

export default Stats;
