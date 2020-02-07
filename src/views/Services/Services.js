import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Service from 'components/Service/Service';
import styled from 'styled-components';
import Loading from 'components/Loading/Loading';

const FETCH_SERVICES = gql`
  query Fetch($author: ID!) {
    photos(author: $author) {
      _id
      title
      description
      src
    }
  }
`;

const Wrapper = styled.div``;

const Services = () => {
  const { loading, error, data } = useQuery(FETCH_SERVICES, { variables: { author: process.env.REACT_APP_UID } });

  if (!data && loading) return <Loading />;
  if (error) return <>Error</>;

  return (
    <Wrapper>
      { data.photos.map(photo => <Service key={photo._id} { ...photo } />) }
    </Wrapper>
  )
}

export default Services;