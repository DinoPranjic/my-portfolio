import styled from "styled-components";

import Wrapper from './Wrapper';

import { GithubIcon, LinkedInIcon, LaptopAndCat, ScrollIndicator} from "../assets"

import theme from "../utils/theme";

import React from "react";

const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${theme.mediaQuery.mobile} {
    display: none;
  }
  svg {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px 25px 0 25px;
`

const LinksContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;

  a {
    color: ${theme.colours.purplePrimary};
    font-family: ${theme.fonts.main};
    font-weight: 800;

    :hover {
      color: ${theme.colours.buttonHover};
    }
  }

  ${theme.mediaQuery.mobile} {
    width: 100%;
  }
`

const Line = styled.span`
  display: block;
  width: 100%;
`

const IntroText = styled.h1`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-family: ${theme.fonts.main};
  font-size: 40px;
  padding-bottom: 10vh;

  ${theme.mediaQuery.mobile} {
    font-size: 30px;
  }
`

const IntroTextAccent = styled.span`
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% + 10px);
    height: 35%;
    bottom: 5px;
    left: -5px;
    background-color: ${theme.colours.purpleAccent};
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 34px);
  margin-bottom: 50px;

  ${theme.mediaQuery.mobile} {
    height: calc(80vh)

  }

`

const ScrollContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow-x: visible;

    .scroll {
    animation: MoveUpDown 2s linear infinite;
  }

  ${theme.mediaQuery.mobile} {
    display: none;
  }

  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(125px);
    }
    50% {
      transform: translateY(100px);
    }

}
`

const ImageContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 40vw;
  right: 100px;
  bottom: 0;

  svg {
    width: 100%;
  }

  ${theme.mediaQuery.mobile} {
    display: none;
  }
`

const socials = [
  {
    svg: <GithubIcon />,
    url: 'https://github.com/DinoPranjic'
  },
  {
    svg: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/dinopranjic1992'
  }
];

const intro = [
  <Line>Hi, I'm Dino.</Line>,
  <Line>I'm a <IntroTextAccent>software developer</IntroTextAccent></Line>,
  <Line>based in Ontario, Canada.</Line>
];

const Socials = () => {
  return(
    <SocialsContainer>
      {socials.map((icon) => (
        <a key={icon.url} href={icon.url} target='_blank' rel="noreferrer">
          {icon.svg}
        </a>
      ))}
    </SocialsContainer>
  )
}

const Header = () => {


  return(
    <header>
      <Nav>
        <Socials />
        <LinksContainer>
          <a href='#about'>about</a>
          <a href='#projects'>projects</a>
          <a href='#skills'>skills</a>
          <a href='mailto:dino@dinopranjic.dev'>contact</a>
        </LinksContainer>
      </Nav>

    <Wrapper>
      <IntroContainer>
        <IntroText>
          {intro.map((line, i) => <React.Fragment key={i}>{line}</React.Fragment>)}
        </IntroText>
      <ImageContainer>
        <LaptopAndCat />
      </ImageContainer>
      <ScrollContainer>
      <ScrollIndicator className='scroll' />
      </ScrollContainer>
      </IntroContainer>
    </Wrapper>
    </header>
  )
}

export default Header;