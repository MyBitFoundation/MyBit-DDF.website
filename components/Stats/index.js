import React from 'react';
import StyledStats from './StyledStats';
import StatCard from './StatCard';

const statsDetails = [{
    name:"Total Value of Fund",
    value: "$896,950.00",
    loadingSize: "130"
  }, {
    name: "Total Payout",
    value: "$103,050.00",
    loadingSize: "130"
  }, {
    name: "Open Tasks",
    value: "219",
    loadingSize: "50"
  }, {
    name: "Completed Tasks",
    value: "36",
    loadingSize: "50"
  }, {
    name: "No. of Contributors",
    value: "9",
    loadingSize: "50"
  }
]

const getStat = stat => <StatCard stat={stat} />

const Stats = props => (
  <StyledStats>
    {statsDetails.map(getStat)}
  </StyledStats>
)

export default Stats;
