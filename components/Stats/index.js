import PropTypes from 'prop-types';
import StyledStats from './StyledStats';
import StatCard from './StatCard';

const getStat = stat => <StatCard key={stat.name} stat={stat} />

const Stats = props => {
  return(
    <StyledStats>
      {props.stats.map(getStat)}
    </StyledStats>
  )
}

Stats.propTypes = {
  stats:  PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Stats;
