import React from 'react';
import StyledBounties from './StyledBounties';
import StyledHeader from './StyledHeader';
import StyledSubHeader from './StyledSubHeader';
import StyledCategories from './StyledCategories';
import Menu from '../Menu';

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
  </StyledBounties>
)

export default Bounties;
