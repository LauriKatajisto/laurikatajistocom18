import React from 'react';
import { Router, Link } from 'react-static';
import styled, { injectGlobal } from 'styled-components';
import { Page, Row, Column } from 'hedron';
// eslint-disable-next-line
import { hot } from 'react-hot-loader';
// eslint-disable-next-line
import Routes from 'react-static-routes';
import Nav from './components/Nav';
import Footer from './components/Footer';

// eslint-disable-next-line
injectGlobal`
  @import url(http://fonts.googleapis.com/css?family=Lato:400,900);

  body {
    background: #3494E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin: 0;
    height: 100%;
    color: #384452;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
`;

const AppStyles = styled.div`
  font-family: 'Lato', sans-serif;
`;


class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <AppStyles>
          <Page fluid>
            <Row alignItems="center">
              <Column fluid>
                <Nav>
                  <Link to="/">LauriKatajisto.com</Link>
                  <Link to="/web">Web</Link>
                  <Link to="/video">Videography</Link>
                  <Link to="/photo">Photography</Link>
                </Nav>
              </Column>
            </Row>
            <Row>
              <Column fluid>
                <Routes />
              </Column>
            </Row>
            <Row>
              <Footer>
                <p>
                  <a href="https://www.twitter.com/LKatajisto"><i className="fab fa-twitter" /></a>
                  <a href="https://vimeo.com/katajisto"><i className="fab fa-vimeo-v" /></a>
                  <a href="https://www.youtube.com/channel/UC0wCWjeiZ8dWIaqgxdBDUEQ"><i className="fab fa-youtube" /></a>
                  <a href="https://fi.linkedin.com/pub/lauri-katajisto/94/9a0/8a6"><i className="fab fa-linkedin" /></a>
                  <a href="https://instagram.com/laurikatajisto/"><i className="fab fa-instagram" /></a>
                </p>
              </Footer>
            </Row>
          </Page>
        </AppStyles>
      </Router>
    );
  }
}

export default hot(module)(App);
