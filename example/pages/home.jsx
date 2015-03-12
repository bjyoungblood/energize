'use strict';

import React from 'react';

import AppHeader from 'src/layout/app-header';
import TopNav from 'src/layout/top-nav';
import SideNav from 'src/layout/side-nav';
import SideNavToggle from 'src/layout/side-nav/toggle';
import SideNavLogo from 'src/layout/side-nav/logo';
import SideNavItem from 'src/layout/side-nav/item';
import Collapsible from 'src/collapsible/collapsible';
import CollapsibleSection from 'src/collapsible/section';
import Modal from 'src/modal';
import IconButton from 'src/icon-button';
import Container from 'src/container';
import Row from 'src/row';
import Col from 'src/col';
import Table from 'src/table';

const HomePage = React.createClass({

  getInitialState() {
    return {
      collapsed : true,
      open : false,
      modal : false,
    };
  },

  toggleModal() {
    this.setState({ modal : ! this.state.modal });
  },

  onCollapseToggle() {
    this.setState({ collapsed : ! this.state.collapsed });
  },

  sideNavToggle() {
    console.log(this.state);
    this.setState({ open : ! this.state.open });
  },

  render() {

    return (
      <div>
        <div className="app-content">

          <AppHeader fixedNav={true}>
            <TopNav>
              <a className="page-title">Page Title</a>
            </TopNav>
            <SideNavToggle onClick={this.sideNavToggle} />
            <SideNav open={this.state.open} onDismiss={this.sideNavToggle}>
              <SideNavLogo>asdf</SideNavLogo>
              <SideNavItem bold={true} active={true}>
                <a>asdf</a>
              </SideNavItem>
              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>

              <Collapsible>

                <CollapsibleSection header="Header!"
                                    open={this.state.collapsed}
                                    onToggle={this.onCollapseToggle}>
                  <ul>
                    <SideNavItem>
                      <a>Collapse child!</a>
                    </SideNavItem>
                    <SideNavItem>
                      <a>Collapse child!</a>
                    </SideNavItem>
                    <SideNavItem>
                      <a>Collapse child!</a>
                    </SideNavItem>
                    <SideNavItem>
                      <a>Collapse child!</a>
                    </SideNavItem>
                    <SideNavItem>
                      <a>Collapse child!</a>
                    </SideNavItem>
                    <SideNavItem>
                      <a>Collapse child!</a>
                    </SideNavItem>
                  </ul>
                </CollapsibleSection>


              </Collapsible>

              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>

              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>

            </SideNav>
            <Modal visible={this.state.modal} onBackgroundClick={this.toggleModal}>
              <Modal.Content>asdf</Modal.Content>
              <Modal.Footer>
                <a href="#" className="waves-effect waves-green btn-flat">Agree</a>
              </Modal.Footer>
            </Modal>
          </AppHeader>

          <Row>
            <Col sm={12} md={4} lg={3}>m3
              <a onClick={this.toggleModal}>MODAL!</a>
            </Col>
            <Col sm={12} md={8} lg={9}>m9</Col>
          </Row>

          <Row>
            <Col md={12}>
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

        </div>
      </div>
    );
  }
});

export default HomePage;
