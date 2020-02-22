import React from 'react';
import { gql } from 'apollo-boost';
import Service from 'components/Service/Service';
import Search, { useSearch } from 'components/Search/Search';

const FETCH_SERVICES = gql`
  query Fetch($author: ID!, $tag: String!, $value: String!) {
    photos(author: $author, tag: $tag, title: $value) {
      _id
      title
      description
      src
    }
  }
`;

const Services = () => {
  const { data, searchProps } = useSearch(FETCH_SERVICES, { author: process.env.REACT_APP_UID, tag: process.env.REACT_APP_SERVICE });

  return (
    <>
      <Search {...searchProps} placeholder="SZUKAJ..." />
      { data ? data.photos.map(photo => <Service key={photo._id} { ...photo } />) : null }
    </>
  );
}

export default Services;