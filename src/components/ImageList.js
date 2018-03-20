import React from 'react';
import { Row, Column } from 'hedron';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;


const Container = styled.div`
  text-align: center;
`;

export default class VideoList extends React.Component {
  renderList = () => {
    return this.props.images.map((image) => {
      return (
        <Column md={4} key={image.fields.title}>
          <Container>
            <Image src={image.fields.file.url} />
          </Container>
        </Column>);
    });
  }

  render() {
    return (
      <Row>
        {
          this.renderList()
        }
      </Row>
    );
  }
}
