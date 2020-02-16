import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/Routes/Routes';
import contact from 'assets/contact.png';
import map from 'assets/map.png';
import list from 'assets/list.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  font-size: 1.4rem;
  font-weight: 600;
  height: 80px;
  background-color: #016DFF;
  position: absolute;
  width: 100vw;
  bottom: 0;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkIcon = styled.img`
  width: 5rem;
  height: 3.6rem;
  margin-bottom: 0.1rem;
`;

const StyledLink = ({ to, src, children }) => (
  <LinkWrapper to={to}>
    <LinkIcon src={src} alt='' />
    {children}
  </LinkWrapper>
)

const Navbar = () => (
  <Wrapper>
    <StyledLink to={ROUTES.map} src={map}>dojazd</StyledLink>
    <StyledLink to={ROUTES.services} src={list}>usługi</StyledLink>
    <StyledLink to={ROUTES.contact} src={contact}>kontakt</StyledLink>
  </Wrapper>
)

export default Navbar;