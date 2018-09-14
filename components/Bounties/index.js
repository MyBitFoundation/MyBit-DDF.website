import PropTypes from 'prop-types';
import Header from './header';
import Card from './card';
import StyledCards from './StyledCards';
import { BountiesDataTmp } from '../../constants';
import StyledSpinner from './loading/StyledSpinner';
import Spin from '../Spin';
import StyledMessage from './StyledMessage';
import StyledPagination from './StyledPagination';
import Pagination from '../Pagination';

const sortBy = (items, type) => {
  switch(type){
    case "Most recent": items.sort((a, b) => a.createdAt < b.createdAt); return;
    case "Highest value": items.sort((a, b) => a.value < b.value); return;
    case "Lowest value": items.sort((a, b) => a.value > b.value); return;
  }
}

const Bounties = ({styling, issues, categories, selectedCategory, setCategory, handleClickedFilter, showCompletedTasks, handleShowCompletedTasks, bountiesPerPage, currentPage, setCurrentPage, orderBy, handleOrderByClicked}) => {

  let issuesFiltered = undefined;
  let totalIssuesFiltered = 0;

  //apply filters
  //filter by category and filters
  if(issues && issues[selectedCategory]){
    issuesFiltered = issues[selectedCategory].issues.slice();
    issuesFiltered = issuesFiltered.filter(issue => {
      let flag = false;
      issue.labels.forEach(label => {
        if(issues[selectedCategory].filters[label])
          flag = true;
      })
      return flag;
    });

    //filter by only completed tags
    if(!showCompletedTasks){
      issuesFiltered = issuesFiltered.filter(issue => !issue.merged);
    }

    sortBy(issuesFiltered, orderBy);

    totalIssuesFiltered = issuesFiltered.length;

    //slice results for pagination
    const startIndex = currentPage * bountiesPerPage;
    let endIndex = (currentPage + 1) * bountiesPerPage;
    issuesFiltered = issuesFiltered.slice(startIndex, endIndex)
  }

  let toReturn = undefined;
  let header = (
    <Header
      styling={styling}
      categories={categories}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
      issues={issues}
      handleClickedFilter={handleClickedFilter}
      showCompletedTasks={showCompletedTasks}
      handleShowCompletedTasks={handleShowCompletedTasks}
      issuesFiltered={issuesFiltered}
      currentPage={currentPage}
      bountiesPerPage={bountiesPerPage}
      totalIssuesFiltered={totalIssuesFiltered}
      orderBy={orderBy}
      handleOrderByClicked={handleOrderByClicked}
    />
  )

  if(!issues){
    toReturn = (
      <StyledMessage>
        <StyledSpinner>
          <Spin
            size="large"
            styling={styling.spin}
          />
        </StyledSpinner>
        <p>Loading Tasks</p>
      </StyledMessage>
    )
  }
  else if(!issuesFiltered || issuesFiltered.length === 0){
    toReturn = (
      <div>
        {header}
        <StyledMessage>No tasks found</StyledMessage>
      </div>
    )
  }
  else{
    toReturn = (
      <div>
        {header}
        <StyledCards>
          {issuesFiltered.map(bounty => <Card {...bounty} key={`${bounty.name} ${bounty.createdAt}`} styling={styling.buttons} />)}
        </StyledCards>
        <StyledPagination>
          <Pagination
            onChange={(currentPage) => setCurrentPage(currentPage - 1)}
            total={totalIssuesFiltered}
            current={currentPage + 1}
            pageSize={bountiesPerPage}
            defaultCurrent={1}
            styling={styling.pagination}
          />
        </StyledPagination>
      </div>
    )
  }

  return toReturn;
}

Bounties.propTypes = {
  styling: PropTypes.object.isRequired,
  issues: PropTypes.object,
};

Bounties.defaultProps = {
  issues: undefined,
}

export default Bounties;
