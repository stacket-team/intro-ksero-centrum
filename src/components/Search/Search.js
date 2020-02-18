import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import lens from 'assets/lens.png';

const Wrapper = styled.div`
  margin: 1rem auto 0;
  width: 24rem;
  height: 4rem;
  border-radius: .4rem;
  background-color: #ffffff;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input` 
  width: 18rem;
  border: 0;
  background-color: transparent;
  padding: 0;

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.07em;
    color: #838383;
  }
`;

const Button = styled.img` 
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
`;

const Search = props => (
  <Wrapper>
    <Input { ...props } />
    <Button src={lens} />
  </Wrapper>
);

export const useSearch = ( query, additionalVariables ) => {
  const [value, setValue] = useState('');
  const { loading, error, data } = useQuery(query, { variables: { value, ...additionalVariables } });

  const handleValue = ({ target: { value } }) => setValue(value);

  return {
    searchProps: { value, onChange: handleValue },
    loading,
    error,
    data,
  }
};

export default Search;