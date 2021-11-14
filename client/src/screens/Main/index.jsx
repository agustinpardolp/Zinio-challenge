import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import MainRouter from '../../routes';
import { StyledMain } from './styled-components';

const Main = () => (
  <StyledMain>
    <Navbar />
    <MainRouter />
    <Footer />
  </StyledMain>
);

export default Main;
