import React from 'react';
import { Row, Column } from 'hedron';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

export default class VideoList extends React.Component {
  renderList = () => {
    return this.props.videos.map((video) => {
      return (
        <Column key={video.fields.title}>
          <Container>
            <iframe
              title={video.fields.title}
              allowFullScreen="true"
              frameBorder="0"
              height="360"
              mozallowfullscreen=""
              src={video.fields.url}
              webkitallowfullscreen=""
              width="640"
            />
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
