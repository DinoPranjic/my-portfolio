import styled from "styled-components";

import Wrapper from "./Wrapper";
import theme from "../utils/theme";
import { Accent } from "../utils/constants";

import { BioImage } from "../assets";

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 50px 25px 0px;
  margin-bottom: 200px;

`

const BioHeader = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 50px;

`

const BioContent = styled.div`
  display: flex;
`

const BioText = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
`

const BioImageContainer = styled.div`
    display: flex;
    position: absolute;
    width: 40vw;
    right: 140px;

    svg {
      width: 100%;
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
]

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
              <BioImage />
              </BioImageContainer>
          </BioContent>
        </BioContainer>

      </Wrapper>
    </>
  )
}

export default Bio;