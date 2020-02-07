import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.figure``;

const Image = styled.img``

const Description = styled.figcaption``;

const Title = styled.div``;

const Service = ({ title, description, src }) => (
  <Wrapper>
    <Image src={ process.env.REACT_APP_API + src } alt={ title } />
    <Description>
      <Title>{ title }</Title>
      { description }
    </Description>
  </Wrapper>
)

export default Service;