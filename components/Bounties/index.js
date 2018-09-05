import PropTypes from 'prop-types';
import Header from './header';
import Card from './card';
import StyledCards from './StyledCards';
import { BountiesDataTmp } from '../../constants';
import StyledSpinner from './loading/StyledSpinner';
import StyledLoadingBounties from './loading/StyledLoadingBounties';
import Spin from '../Spin';

const Bounties = ({styling, loading}) => (
  loading ?
    <StyledLoadingBounties>
      <StyledSpinner>
        <Spin
          size="large"
          styling={styling.spin}
        />
      </StyledSpinner>
      <p>Loading Bounties</p>
    </StyledLoadingBounties>
    :
    <div>
      <Header
        styling={styling}
      />
      <StyledCards>
        {BountiesDataTmp.map(bounty => <Card {...bounty} key={bounty.name} styling={styling.buttons} />)}
      </StyledCards>
    </div>
)

Bounties.propTypes = {
  styling: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Bounties;
