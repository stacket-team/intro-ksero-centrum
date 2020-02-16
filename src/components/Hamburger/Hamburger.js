import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/Routes/Routes';
import hamburger from 'assets/hamburger.png';
import close from 'assets/close.png';
import contact from 'assets/contact.png';
import map from 'assets/map.png';
import list from 'assets/list.png';

const OpenButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-top: 1.8rem;
`;

const Interceptor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding-left: calc(100vw - 27.5rem);
  transform: translateX(100vw);

  &.opened {
    display: block;
    animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  &.closed {
    display: block;
    animation: slide-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes slide-left {
    0% {
      transform: translateX(27.5rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100vw);
    }
  }
`;

const Wrapper = styled.div`
  width: 27.5rem;
  height: 100vh;
  background-color: #3E3E3E;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin: 2rem;
  margin-left: auto;
`;

const LinkWrapper = styled(Link)`
  font-size: 1.8rem;
  font-weight: 500;
  height: 5rem;
  line-height: 5rem;
  padding: 0 2rem;
`;

const LinkIcon = styled.img`
  margin-bottom: -.7rem;
  margin-right: 1rem;
  width: 4rem;
  height: 2.8rem;
`;

const StyledLink = ({ to, src, children }) => (
  <LinkWrapper to={to}>
    <LinkIcon src={src} alt='' />
    {children}
  </LinkWrapper>
);

const Hamburger = () => {
  const [ isOpen, setOpen ] = useState(undefined);

  const handleButton = () => setOpen(prevState => !prevState);

  return (
    <>
      <OpenButton src={hamburger} alt='menu' onClick={handleButton} />
      <Interceptor className={isOpen === true ? 'opened' : isOpen === false ? 'closed' : ''} onClick={handleButton}>
        <Wrapper>
          <CloseButton src={close} alt='close' />
          <StyledLink to={ROUTES.contact} src={contact}>kontakt</StyledLink>
          <StyledLink to={ROUTES.services} src={list}>usługi</StyledLink>
          <StyledLink to={ROUTES.map} src={map}>dojazd</StyledLink>
          <StyledLink to={ROUTES.about}>o firmie</StyledLink>
        </Wrapper>
      </Interceptor>
    </>
  );
}

export default Hamburger;