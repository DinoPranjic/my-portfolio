import styled, { keyframes } from "styled-components";

import Wrapper from "./Wrapper";
import theme from "../utils/theme";
import { Accent } from "../utils/constants";

import { BioImage, Seamus } from "../assets";

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0px 25px 0px;
  margin-bottom: 200px;

  ${theme.mediaQuery.mobile} {
    padding: 0;
    margin-bottom: 50px;
  }

`

const BioHeader = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 50px;

`

const BioContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${theme.mediaQuery.mobile} {
    flex-direction: column;
  }
`

const BioText = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;

  ${theme.mediaQuery.mobile} {
    width: 100%;
  }
`

const BioImageContainer = styled.div`
    display: flex;
    width: 50%;
    position: relative;
`

const BioSvg = styled.svg`
  width: 100%;
  margin-top: 20px;

  ${theme.mediaQuery.mobile} {
    display: none;
  }
`
const SeamusAnimation = keyframes`
  0% {
    transform: translateY(0);
  } 
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(-30px);
  }
`
const SeamusIcon = styled.svg`
  position: absolute;
  top: 30px;
  right: 30%;
  z-index: -1;
  animation: ${SeamusAnimation} 3s ease infinite;

  ${theme.mediaQuery.mobile} {
    display: none;
  }
`

const BioParagraph = styled.p`
  font-family: ${theme.fonts.secondary};
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colours.font};
  margin-bottom: 20px;
`

const paragraphs =  [
  "Hey there! I'm Dino. I'm a full stack software developer living in Ontario, Canada. I first began programming as a kid, building simple text-based computer games with C++. Today, I'm lucky enough to have turned that initial love for programming into a career.",
  "I'm passionate about the environment and sustainability and would love to work with like minded individuals. When I'm not coding, I spend most of my time outdoors fishing, camping and hiking."
];

const Bio = () => {
  return(
    <>
      <Wrapper>
        <BioHeader id="about">
          <Accent>About</Accent>
        </BioHeader>
        <BioContainer>
          <BioContent>
            <BioText>
            {paragraphs.map((paragraph) => (
              <BioParagraph>{paragraph}</BioParagraph>
            ))}
            </BioText>
              <BioImageContainer>
                <SeamusIcon as={Seamus} />
                <BioSvg as={BioImage} />
              </BioImageContainer>
          </BioContent>
        </BioContainer>

      </Wrapper>
    </>
  )
}

export default Bio;