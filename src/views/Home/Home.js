import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/Routes/Routes';
import eye from 'assets/eye.png';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const FETCH_HIGHLIGHTED = gql`
  query Fetch($author: ID!, $tag: String!) {
    photos(author: $author, tag: $tag) {
      _id
      title
      description
      src
    }
  }
`;

const Heading = styled.div`
  margin-top: -6rem;
  padding: 9rem 2.5rem 0 5rem;
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 5rem;
  letter-spacing: 0.03em;
`;

const Small = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  color: #A6A695;
  margin-top: 2rem;
  line-height: 2.1rem;
  height: 2.1rem;
`;

const SliderWrapper = styled.div`
  margin: 6rem 3rem 0rem 5rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  height: 3rem;
  line-height: 3rem;
`;
const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SliderLink = styled(Link)`
  color: #016DFF;
`;
const SliderLinkImage = styled.img`
  margin-bottom: -0.4rem;
  margin-right: 0.5rem;
  width: 2.2rem;
  height: 2.2rem;
`;
const SliderBody = styled.div`
  margin-top: 2rem;
  margin-left: -5rem;
  padding-left: 5rem;
  width: 100vw;
  height: 29rem;
  overflow: hidden;
  overflow-x: scroll;
  position: relative;
  display: flex;
`;
const ServiceWrapper = styled.div`
  border-radius: 2.5rem;
  min-width: 21rem;
  max-width: 21rem;
  height: 100%;
  margin-right: 4rem;
  background-color: #2e2e2e;
`;
const ServiceTitle = styled.div`
  padding: 1.5rem;
  font-size: 1.8rem;
  font-weight: 500;
  height: 6rem;
  line-height: 3rem;
`;
const ServiceImage = styled.img`
  display: block;
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
`;
const ServiceDescription = styled.div`
  padding: 1.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: initial;
  display: flex;
  align-items: center;
  text-align: center;
  height: 8rem;
`;
const Spacer = styled.div`
  min-width: 1px;
  margin-left: -1rem;
`;

const Services = ({ services }) => (
  <SliderWrapper>
    <SliderHeader>
      Nasze usługi
      <SliderLink to={ROUTES.services}>
        <SliderLinkImage src={eye} alt='-' />
        Wszystkie
      </SliderLink>
    </SliderHeader>
    <SliderBody>
      {services.map(({ title, description, src }, i) => (
      <ServiceWrapper key={i}>
        <ServiceTitle>{title}</ServiceTitle>
        <ServiceImage src={process.env.REACT_APP_API + src} />
        <ServiceDescription>{description}</ServiceDescription>
      </ServiceWrapper>
      ))}
      <Spacer />
    </SliderBody>
  </SliderWrapper>
)

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_HIGHLIGHTED, { variables: { author: process.env.REACT_APP_UID, tag: process.env.REACT_APP_HIGHLIGHTED } });

  return (
    <>
      <Heading>
        Wymarzony punkt ksero i&nbsp;opraw
        <Small>Zakład introligatorski w Poznaniu</Small>
      </Heading>
      { !loading && !error ? <Services services={data.photos} /> : null }
    </>
  );
}

export default Home;