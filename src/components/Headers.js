import React from 'react';
import styled from 'styled-components';
import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Button path="/">
        📍 List your location
      </Button>
      <Button path="/">
        💸 Donate
      </Button>
      <Button path="#stay-informed">
        🚨 Stay informed
      </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        <h1>dealdelivers.com</h1>
        <p>Local restaurants, shops & essential services that deliver direct to your door</p>
        <LocationSearch />
      </Container>
    </StyledHeroHeader>
  )
}

const StyledHeroHeader = styled.header`
  display:block;
  padding:var(--spacing-xxl) 0;
  padding-bottom:calc(var(--spacing-lg) * 2.5);
  background-color:var(--base);
  background-size:cover;
  background-position:top;

  h1 {
    color:var(--text-high-white);
    margin:0 0 1rem 0;
  }
  p {
    color:var(--text-med-white);
    max-width:35ch;
  }

  @media(min-width:48rem) {
    padding-bottom:calc(var(--spacing-xl) * 1.5);
  }
`

const StyledNav = styled.nav`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-flow:row nowrap;
  width:100%;  
  padding:var(--spacing-sm);

  @media(min-width:48rem) {
    justify-content:flex-end;

    a {
      margin-left:var(--spacing-xs);
    }
  }

 
`