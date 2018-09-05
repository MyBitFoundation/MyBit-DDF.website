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
import { Categories } from '../../../constants';

const Header = ({styling}) => (
    <div>
      <StyledTitle>
        Bounties
      </StyledTitle>
      <StyledSubHeader>
      Chose your expertise
      </StyledSubHeader>
      <StyledCategories>
        <Menu
          onClick={() => {}}
          selectedKeys={["Development"]}
          mode="horizontal"
          items={Categories}
          className="categories-desktop"
          styling={styling.menu}
        />
        <Menu
          onClick={() => {}}
          selectedKeys={["Development"]}
          mode="vertical"
          items={Categories}
          className="categories-mobile"
          styling={styling.menu}
        />
      </StyledCategories>
      <StyledFilters>
        {Categories[0].filters.map(filter => (
          <Filter
            styling={styling.filters}
            checked
            key={filter}
          >
            {filter}
          </Filter>
        ))}
      </StyledFilters>
      <StyledListHeader>
        <div>
          <StyledListHeaderLeft>
            <StyledItemsCounter>
              Showing 1-15 of 190
            </StyledItemsCounter>
            <StyledSwitch>
              <Switch
                size="small"
                checked={false}
                styling={styling.switch}
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
            selected="Most recent"
            handleClick={(val) => console.log(val)}
            menu={["Most recent", "Highest value", "Lowest value"]}
            styling={styling.dropdown}
            trigger="click"
          />
        </div>
      </StyledListHeader>
    </div>
)

Header.propTypes = {
  styling: PropTypes.object.isRequired,
};

export default Header;
