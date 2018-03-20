import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
import logoImg from '../../public/images/header-bg2.jpg';

const Image = styled.img`
  width: 100%;
`;
const ImageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-height: 1000px;
`;


export default withSiteData(() => (
  <ImageContainer>
    <Image src={logoImg} />
  </ImageContainer>
));
