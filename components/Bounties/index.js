import PropTypes from 'prop-types';
import Header from './header';
import Card from './card';
import StyledCards from './StyledCards';
import { BountiesDataTmp } from '../../constants';
import StyledSpinner from './loading/StyledSpinner';
import StyledLoadingBounties from './loading/StyledLoadingBounties';
import Spin from '../Spin';

const Bounties = ({styling, issues, categories, selectedCategory, setCategory, handleClickedFilter, showCompletedTasks, handleShowCompletedTasks}) => {

  let issuesFiltered = undefined;

  //apply filters
  if(issues){
    issuesFiltered = issues[selectedCategory].issues.slice();
    let issuesOfCategoryFiltered = issuesFiltered.filter(issue => {
      let flag = false;
      issue.labels.forEach(label => {
        if(issues[selectedCategory].filters[label])
          flag = true;
      })
      return flag;
    });
    issuesFiltered = issuesOfCategoryFiltered;
  }

  return (
    !issuesFiltered ?
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
          categories={categories}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          issues={issues}
          handleClickedFilter={handleClickedFilter}
          showCompletedTasks={showCompletedTasks}
          handleShowCompletedTasks={handleShowCompletedTasks}
        />
        <StyledCards>
          {issuesFiltered.map(bounty => <Card {...bounty} key={bounty.name} styling={styling.buttons} />)}
        </StyledCards>
      </div>
  )
}

Bounties.propTypes = {
  styling: PropTypes.object.isRequired,
  issues: PropTypes.object,
};

Bounties.defaultProps = {
  issues: undefined,
}

export default Bounties;
