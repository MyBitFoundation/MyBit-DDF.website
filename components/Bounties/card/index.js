import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { notification, Tooltip } from 'antd';
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
import { GetTimeAgo } from '../../../utils';
import Icon from '../../Icon';
import StyledCheckmark from './StyledCheckmark';
import StyledNotYetFunded from './StyledNotYetFunded';
import {OrgName} from '../../../constants';
import StyledCopyToClipboard from './StyledCopyToClipboard';

const getValueLabel = (value, mybitInUsd, tokenSymbol, showAmountInCrypto, merged) =>
  value > 0 ?
    <div style={{marginTop: "16px"}}>
      <StyledValueLabel merged={merged}>
          Value
        </StyledValueLabel>
        <StyledValue merged={merged}>
        {
          showAmountInCrypto ?
            `${Number(value.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${tokenSymbol}` :
            `$${Number(mybitInUsd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
      </StyledValue>
    </div>
  :
    <StyledNotYetFunded>
      <p>Not yet funded</p>
    </StyledNotYetFunded>


const generateLabels = (labels) =>
  <StyledLabels>
    {labels.map(label => (
      <StyledLabel key={label}>
        <Divider type="vertical"/>{' '}{label}
      </StyledLabel>
    ))}
  </StyledLabels>

const getTimeLabel = (time) =>
  <StyledCardTime>
    {GetTimeAgo(time)}
  </StyledCardTime>

const Card = ({title, labels, repoName, repoUrl, value, mybitInUsd, createdAt, url, styling, merged, tokenSymbol, showAmountInCrypto}) =>
  <StyledCard>
    <StyledHeader>
      <div>
        {merged && (
          <StyledCheckmark>
            <Icon type="check" />
          </StyledCheckmark>
        )}
        <a href={url}
          target="_blank"
          rel="noreferrer"
        >
          <StyledCardTitle merged={merged}>
            {title}
          </StyledCardTitle>
        </a>
        <StyledCopyToClipboard
          onClick={() => {
            navigator.clipboard.writeText(url);
            notification.open({
              message: "Link Copied",
              duration: 1.5,
              icon: (
                <StyledCheckmark>
                  <Icon type="check" />
                </StyledCheckmark>
              )
            });
          }}>
        <Tooltip title="Copy task link to clipboard"><Icon type="copy" /> </Tooltip>
        </StyledCopyToClipboard>
        {generateLabels(labels)}
      </div>
      <div>
        {getTimeLabel(createdAt)}
      </div>
    </StyledHeader>
    <StyledRepoName
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      merged={merged}
    >
      {`${OrgName}/${repoName}`}
    </StyledRepoName>
    <StyledFooter>
      {getValueLabel(value, mybitInUsd, tokenSymbol, showAmountInCrypto, merged)}
      {!merged &&
        <StyledButtonChallenge>
          <Button
            styling={styling.primary.blue}
            size="large"
            href={url}
          >
            Accept Challenge
        </Button>
        </StyledButtonChallenge>
      }
    </StyledFooter>
  </StyledCard>

Card.propTypes = {
  styling: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tokenSymbol: PropTypes.string.isRequired,
  merged: PropTypes.bool.isRequired,
  showAmountInCrypto: PropTypes.bool.isRequired,
  mybitInUsd: PropTypes.string.isRequired,
};

export default Card;
