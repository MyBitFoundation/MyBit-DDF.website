import PropTypes from 'prop-types';
import StyledWelcome from './StyledWelcome';
import Button from '../Button';
import Checkmark from '../../static/checkmark.svg';

const Welcome = ({ styling, hadleWelcomeClicked }) => (
  <StyledWelcome>
    <p className="title">Welcome to Task Market</p>
    <p>Task Market makes it simple for anyone around the world to be rewarded for contributing to the development of the MyBit Network.</p>
    <p className="medium-font">The benefits include:</p>
    <p className="checkmark">No time consuming onboarding, all you need is a github account!</p>
    <p className="checkmark">Work when you want, from where you want!</p>
    <p className="checkmark">Benefit from extreme flexibility, no contracts or commitments!</p>
    <p>The Task Market is a layer built on-top of Gitcoin. To continue you will need an account with Gitcoin.
      Instructions can be found{' '}
      <a
        href="https://gitcoin.co/how/contributor"
        target="_blank"
        rel="noopener noreferrer">here
      </a>
      .
    </p>
    <p className="medium-font">Welcome to the Future of Work!</p>
    <Button
      styling={styling}
      size="large"
      handleRoute={hadleWelcomeClicked}
    >
     Get Started
    </Button>
  </StyledWelcome>
);

export default Welcome;
