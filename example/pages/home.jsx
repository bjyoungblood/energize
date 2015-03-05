'use strict';

import React from 'react';

import AppHeader from 'src/layout/app-header';
import TopNav from 'src/layout/top-nav';
import SideNav from 'src/layout/side-nav';
import SideNavToggle from 'src/layout/side-nav/toggle';
import SideNavLogo from 'src/layout/side-nav/logo';
import SideNavItem from 'src/layout/side-nav/item';
import IconButton from 'src/icon-button';
import Container from 'src/container';
import Row from 'src/row';
import Col from 'src/col';

const HomePage = React.createClass({

  render() {

    return (
      <div>
        <div className="app-content">

          <AppHeader fixedNav={true}>
            <TopNav>
              <a className="page-title">Page Title</a>
            </TopNav>
            <SideNavToggle />
            <SideNav>
              <SideNavLogo>asdf</SideNavLogo>
              <SideNavItem bold={true} active={true}>
                <a>asdf</a>
              </SideNavItem>
              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>
            </SideNav>
          </AppHeader>

          <Row>
            <Col sm={12} md={4} lg={3}>m3</Col>
            <Col sm={12} md={8} lg={9}>m9</Col>
          </Row>

        </div>
      </div>
    );
  }
});

export default HomePage;
