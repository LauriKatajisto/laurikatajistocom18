import styled from 'styled-components';
import React, { PureComponent } from 'react';

const Element = styled.h1`
  color: white;
`;


export default class Title extends PureComponent {
  render() {
    return (
      <Element>{this.props.children}</Element>
    );
  }
}
