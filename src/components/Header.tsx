import styled from "styled-components";

import Wrapper from './Wrapper';

import { GithubIcon, LinkedInIcon, LaptopAndCat} from "../assets"

const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    height: 30px;
    width: 30px;
    margin-left: 2px;
  }
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Line = styled.span`
  display: block;
  width: 100%;
  max-width: calc(100vw - 50px);
`

const IntroText = styled.h1`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 20vh;

`

const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

`

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20vh;

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
  <Line>I'm a Software Developer</Line>,
  <Line>based in Ontario, Canada.</Line>
]

const Socials = () => {
  return(
    <SocialsContainer>
      {socials.map((icon) => (
        <a href={icon.url} target='_blank'>
          {icon.svg}
        </a>
      ))}
    </SocialsContainer>
  )
}

const Header = () => {


  return(
    <>
    <Nav>
    <Socials />
    </Nav>

    <Wrapper>
      <IntroContainer>
      <IntroText>
        {intro.map((line) => line)}
      </IntroText>
      <ImageContainer>
      <LaptopAndCat />
      </ImageContainer>
      
      </IntroContainer>
    </Wrapper>
    </>
  )
}

export default Header;