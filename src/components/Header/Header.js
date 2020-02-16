import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/Routes/Routes';
import Hamburger from 'components/Hamburger/Hamburger';

const Wrapper = styled.div`
  font-size: 2rem;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 1.8rem;
`;

const Header = () => (
  <Wrapper>
    <Link to={ROUTES.home}>intro-ksero-centrum</Link>
    <Hamburger />
  </Wrapper>
)

export default Header;