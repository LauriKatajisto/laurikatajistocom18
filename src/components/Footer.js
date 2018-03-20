import styled from 'styled-components';
import React, { PureComponent } from 'react';

const Footer = styled.footer`
  width: 100%;
  color: white;
  text-align: center;
  height: 50px;
  padding: 20px;

  a {
    color: white;
    margin-right: 10px;
    font-size: 2em;
  }
`;


export default class Nav extends PureComponent {
  render() {
    return (
      <Footer>{this.props.children}</Footer>
    );
  }
}
