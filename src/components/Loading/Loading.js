import React from 'react';
import styled from 'styled-components';
import loading from 'assets/loading.gif';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

const Loading = () => (
  <Wrapper>
    <Image src={loading} />
  </Wrapper>
)

export default Loading;