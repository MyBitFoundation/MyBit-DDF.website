import PropTypes from 'prop-types';
import { Divider } from 'antd';
import 'antd/lib/divider/style/';
import StyledCard from './StyledCard';
import StyledCardTime from './StyledCardTime';
import StyledLabel from './StyledLabel';
import StyledLabels from './StyledLabels';
import StyledCardTitle from './StyledCardTitle';
import StyledRepoName from './StyledRepoName';
import StyledValue from './StyledValue';
import StyledValueLabel from './StyledValueLabel';
import StyledButtonChallenge from './StyledButtonChallenge';
import StyledHeader from './StyledHeader';
import StyledFooter from './StyledFooter';
import Button from '../../Button';
import dayjs from 'dayjs';

const generateLabels = (labels) =>
  <StyledLabels>
    {labels.map(label => (
      <StyledLabel key={label}>
        <Divider type="vertical"/>{' '}{label}
      </StyledLabel>
    ))}
  </StyledLabels>

const getTimeLabel = (time) => {
  const creationTime = dayjs(time);
  const now = dayjs(new Date().getTime());

  const miliseconds = now.diff(creationTime);

  const hours = miliseconds / 3600000;
  let toReturn = "";
  if(hours < 0.5){
    toReturn = "past 30 minutes";
  }
  else if(hours < 1){
    toReturn = "past hour";
  }
  else if(hours < 24){
    let hoursAux = hours.toFixed(0);
    let hoursText = hoursAux == 1 ? "hour" : "hours";
    toReturn = `${hoursAux} ${hoursText} ago`;
  }
  //= ~1 month
  else if(hours < 24 * 31){
    let days = hours / 24;
    let daysAux = days.toFixed(0);
    let daysText = daysAux == 1 ? "day" : "days";
    toReturn = `${daysAux} ${daysText} ago`;
  }
  else if(hours < 24 * 31 * 5){
    let months = hours / (24 * 31);
    let monthsAux = months.toFixed(0);
    let monthsText = monthsAux == 1 ? "month" : "months";
    toReturn = `${monthsAux} ${monthsText} ago`;
  }
  //= ~6 months
  else if(hours < 24 * 31 * 12){
    toReturn = "Over 6 months ago";
  }
  else {
    toReturn = dayjs(time).format('YYYY-MM-DD');
  }

  return (
  <StyledCardTime>
    {toReturn}
  </StyledCardTime>
)}

const Card = ({name, labels, repoName, repoUrl, value, creationTime, issueUrl, styling}) =>
  <StyledCard>
    <StyledHeader>
      <div>
        <StyledCardTitle>
          {name}
        </StyledCardTitle>
        {generateLabels(labels)}
      </div>
      <div>
        {getTimeLabel(creationTime)}
      </div>
    </StyledHeader>
    <StyledRepoName>
      {repoName}
    </StyledRepoName>
    <StyledFooter>
      <div>
        <StyledValueLabel>
          Value
        </StyledValueLabel>
        <StyledValue>
          {value}
        </StyledValue>
      </div>
      <StyledButtonChallenge>
        <Button
          styling={styling.primary.blue}
          size="large"
          href="/placeholder"
        >
          Accept Challenge
      </Button>
      </StyledButtonChallenge>
    </StyledFooter>
  </StyledCard>

Card.propTypes = {
  styling: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  creationTime: PropTypes.number.isRequired,
  issueUrl: PropTypes.string.isRequired,
};

export default Card;
