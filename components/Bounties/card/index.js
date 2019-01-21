import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { notification, Switch, Tooltip } from 'antd';
import 'antd/lib/divider/style/';
import StyledCard from './StyledCard';
import StyledCardTime from './StyledCardTime';
import StyledLabel from './StyledLabel';
import StyledLabels from './StyledLabels';
import StyledCardTitle from './StyledCardTitle';
import StyledRepoName from './StyledRepoName';
import StyledValue from './StyledValue';
import StyledValueLabel from './StyledValueLabel';
import StyledDescription from './StyledDescription';
import Comments from '../../Comments';
import AddComment from '../../Comments/AddComment';
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
import MarkdownGithub from 'react-markdown-github';
import { CommentsPerPage } from "../../../constants";

const generateLabels = (labels) =>
  <StyledLabels>
    {labels.map(label => (
      <StyledLabel key={label}>
        <Divider type="vertical"/>{' '}{label}
      </StyledLabel>
    ))}
  </StyledLabels>;

const getTimeLabel = (time) =>
  <StyledCardTime>
    {GetTimeAgo(time)}
  </StyledCardTime>;


export default class Card extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showDescription: false,
      showComments: false,
      showAddComment: false
    };
    this.getValueLabel = this.getValueLabel.bind(this);
  }

  getValueLabel = (value, mybitInUsd, tokenSymbol, showAmountInCrypto, merged, url) =>
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
      {<Switch style={{marginLeft: "5px"}} checkedChildren="Hide Description" unCheckedChildren="Show Description" onChange={(checked) => {
        this.setState({showDescription: checked});
      }}/>}
      {<Switch style={{marginLeft: "5px"}} checkedChildren="Hide Comments" unCheckedChildren="Show Comments" onChange={(checked) => {
        this.setState({showComments: checked});
      }}/>}
      {<Switch style={{marginLeft: "5px"}} checkedChildren="Hide Comment Box" unCheckedChildren="Show Comment Box" onChange={(checked) => {
        this.setState({showAddComment: checked});
      }}/>}
    </div>
  :
    <StyledNotYetFunded>
      <p>Not yet funded</p>
    </StyledNotYetFunded>

  render() {
    const {title, labels, repoName, repoUrl, value, mybitInUsd, createdAt, url, styling, merged, tokenSymbol, showAmountInCrypto, body, comments} = this.props;
    const { showDescription, showComments, showAddComment } = this.state;

    return(
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

        {this.getValueLabel(value, mybitInUsd, tokenSymbol, showAmountInCrypto, merged, url)}

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

      {showDescription && <StyledDescription><MarkdownGithub source={body} /> </StyledDescription>}
      {showComments &&
        <Comments
          commentsPerPage={CommentsPerPage} comments={comments}
        />
      }
      {showAddComment &&
        <AddComment
          styling={styling}
          issueUrl={url}
        />
      }
    </StyledCard>
  )}
}

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
