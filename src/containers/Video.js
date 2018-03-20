import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
import Title from '../components/Title';
import VideoList from '../components/VideoList';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export default withRouteData(({ fields }) => (
  <Container>
    <Title>
      { fields.title }
    </Title>
    <VideoList videos={fields.content} />
  </Container>
));
