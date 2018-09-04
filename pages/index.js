import React from 'react';
import Layout from '../index.js'
import Header from '../components/Header'
import Stats from '../components/Stats';
import DdfInfo from '../components/Context/DdfInfo'
import DdfInfoContext from '../components/Context/DdfInfoContext'
import Bounties from '../components/Bounties';
import Theme from '../components/Theme';
import StyledAppWrapper from './StyledAppWrapper';
import Pagination from '../components/Pagination';
import StyledPageContentWrapper from './StyledPageContentWrapper';
import StyledPagination from './StyledPagination';
import Footer from '../components/Footer';
import { footer } from '../constants';

export default class Home extends React.Component{

  state = {
    sideBar: false,
    currentPage: 1,
    loadingBounties: false,
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  handleClickMobileMenu = (sideBar) => {
    this.setState({sideBar});
  }

  render(){
    const {loadingBounties} = this.state;
    return(
      <DdfInfo>
        <Layout>
          <StyledAppWrapper isMenuOpen={this.state.sideBar}>
            <Header
              styling={Theme}
              handleClickMobileMenu={this.handleClickMobileMenu}
              sidebarOpen={this.state.sideBar}
            />
              <DdfInfoContext.Consumer>
                {props => (
                  <Stats stats={props.stats}/>
                )}
              </DdfInfoContext.Consumer>
              <StyledPageContentWrapper>
                <Bounties
                  styling={Theme}
                  loading={loadingBounties}
                />
                {!loadingBounties &&
                  <StyledPagination>
                    <Pagination
                      onChange={(currentPage) => this.setState({currentPage: currentPage - 1})}
                      total={100}
                      current={1}
                      pageSize={15}
                      defaultCurrent={1}
                      styling={Theme.pagination}
                    />
                  </StyledPagination>
                }
              </StyledPageContentWrapper>
            </StyledAppWrapper>
            <Footer
              styling={Theme.footer}
              footerDetails={footer}
            />
        </Layout>
      </DdfInfo>
    )
  }
}
