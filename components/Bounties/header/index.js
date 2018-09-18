import PropTypes from 'prop-types';
import StyledTitle from './StyledTitle';
import StyledSubHeader from './StyledSubHeader';
import StyledCategories from './StyledCategories';
import StyledFilters from './StyledFilters';
import StyledListHeader from './StyledListHeader';
import StyledItemsCounter from './StyledItemsCounter';
import StyledLabelCompletedTasks from './StyledLabelCompletedTasks';
import StyledListHeaderLeft from './StyledListHeaderLeft';
import StyledSwitch from './StyledSwitch';
import Menu from '../../Menu';
import Switch from '../../Switch';
import Filter from '../../Filter';
import Dropdown from '../../Dropdown';
import { Categories } from '../../../constants';

const Header = ({styling, categories, selectedCategory, setCategory, issues, handleClickedFilter, showCompletedTasks, handleShowCompletedTasks, issuesFiltered, bountiesPerPage, currentPage, totalIssuesFiltered, orderBy, handleOrderByClicked}) => {

  let max = 0;
  let min = 0;
  if(issuesFiltered){
    if(bountiesPerPage > totalIssuesFiltered){
      min = totalIssuesFiltered > 0 ? currentPage * bountiesPerPage + 1 : 0;
      max = totalIssuesFiltered;
    }
    else{
      min = currentPage * bountiesPerPage + 1;
      max = totalIssuesFiltered >= (currentPage + 1) * bountiesPerPage ? (currentPage + 1) * bountiesPerPage : currentPage * (bountiesPerPage + 1) + issuesFiltered.length - 1;
    }
  }

  return (
    <div>
      <StyledTitle>
        Bounties
      </StyledTitle>
      <StyledSubHeader>
      Choose your expertise
      </StyledSubHeader>
      <StyledCategories>
        <Menu
          onClick={(item) => setCategory(item.key)}
          selectedKeys={[selectedCategory]}
          mode="horizontal"
          items={Categories}
          className="categories-desktop"
          styling={styling.menu}
        />
        <Menu
          onClick={(item) => setCategory(item.key)}
          selectedKeys={[selectedCategory]}
          mode="vertical"
          items={Categories}
          className="categories-mobile"
          styling={styling.menu}
        />
      </StyledCategories>
      <StyledFilters>
        {issues[selectedCategory] && Object.entries(issues[selectedCategory].filters).map(filter => (
          <Filter
            styling={styling.filters}
            checked={filter[1]}
            key={filter[0]}
            onChange={(checked) => {handleClickedFilter(filter[0], checked)}}
          >
            {filter[0]}
          </Filter>
        ))}
      </StyledFilters>
      <StyledListHeader>
        <div>
          <StyledListHeaderLeft>
            <StyledItemsCounter>
              {issuesFiltered ? `Showing ${min}-${max} of ${totalIssuesFiltered}` : "Showing 0 of 0"}
            </StyledItemsCounter>
            <StyledSwitch>
              <Switch
                size="small"
                checked={showCompletedTasks}
                styling={styling.switch}
                onChange={(checked) => handleShowCompletedTasks(checked)}
              />
              <StyledLabelCompletedTasks>
                Show completed tasks
              </StyledLabelCompletedTasks>
            </StyledSwitch>
          </StyledListHeaderLeft>
        </div>
        <div>
          <Dropdown
            placement="bottomCenter"
            selected={orderBy}
            handleClick={(order) => handleOrderByClicked(order)}
            menu={["Most recent", "Highest value", "Lowest value"]}
            styling={styling.dropdown}
            trigger="click"
          />
        </div>
      </StyledListHeader>
    </div>
)}

Header.propTypes = {
  styling: PropTypes.object.isRequired,
};

export default Header;
