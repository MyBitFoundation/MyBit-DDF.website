import React from 'react';
import StyledBounties from './StyledBounties';
import StyledHeader from './StyledHeader';
import StyledSubHeader from './StyledSubHeader';
import StyledCategories from './StyledCategories';
import StyledFilters from './StyledFilters';
import Menu from '../Menu';
import Tag from '../Tag';
import Constants from '../Constants';

const categories = [{
  name: "Development",
  filters: ["Front-End", "Smart Contracts", "APIs", "Debugging", "Other"],
}, {
  name: "Design",
  filters: ["Sketch", "Photoshop"]
}, {
  name: "Marketing",
  filters: ["Market this", "Market that"],
}];


const Bounties = ({}) => (
  <StyledBounties>
    <StyledHeader>
      Bounties
    </StyledHeader>
    <StyledSubHeader>
    Chose your expertise
    </StyledSubHeader>
    <StyledCategories>
      <Menu
        onClick={() => {}}
        selectedKeys={["Development"]}
        mode="horizontal"
        items={categories}
      />
    </StyledCategories>
    <StyledFilters>
      {categories[0].filters.map(filter => (
        <Tag
        constants={Constants}
        checked
        >{filter}</Tag>
      ))}
    </StyledFilters>
  </StyledBounties>
)

export default Bounties;
