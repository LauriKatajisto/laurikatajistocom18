/* eslint-disable jsx-a11y/interactive-supports-focus */
import styled from 'styled-components';
import React, { Component } from 'react';

export const Navi = styled.div`
  overflow: hidden;

  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  a:hover {
      /*background-color: #ddd;*/
      color: black;
  }

  .active {
      /*background-color: #4CAF50;*/
      color: white;
  }

  .icon {
      display: none;
  }

  @media screen and (max-width: 600px) {
    a:not(:first-child) {display: none;}
    a.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    .responsive {position: relative;}
    .responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;

export const toggle = prevState => ({
  open: prevState.open !== true,
});

export default class Nav extends Component {
  constructor(p) {
    super(p);
    this.state = {
      open: false,
    };

    this.getNavClass = this.getNavClass.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  getNavClass() {
    return this.state.open === false ? 'topnav' : 'topnav responsive';
  }

  toggleNav() {
    this.setState(toggle);
  }

  render() {
    return (
      <Navi>
        <div className={this.getNavClass()}>
          {this.props.children}
          <a role="button" className="icon" onClick={this.toggleNav}>&#9776;</a>
        </div>
      </Navi>
    );
  }
}
