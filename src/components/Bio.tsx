import styled from "styled-components";
import Wrapper from "./Wrapper";
import theme from "../utils/theme";

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 50px 25px 50px;
  margin: 100px 0px 100px 0px;

  border: 6px solid ${theme.colours.purpleBackground};
  border-radius: 28px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

const BioHeader = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 30px;

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

const BioParagraph = styled.p`
  font-family: ${theme.fonts.secondary};
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colours.font};
  margin-bottom: 20px;
  text-align: center;
`

const paragraphs =  [
  "Hey there! I'm Dino. I'm a full stack software developer living in Ontario, Canada. I first began programming as a kid, building simple text-based computer games with C++. Today, I'm lucky enough to have turned that initial love for programming into a career.",
  "I'm passionate about the environment and sustainability and would love to work with like minded individuals. When I'm not coding, I spend most of my time outdoors fishing, camping and hiking."
]

const Bio = () => {
  return(
    <>
      <Wrapper>
        <BioContainer>
          <BioHeader id="about">
            About
          </BioHeader>
            {paragraphs.map((paragraph) => (
              <BioParagraph>{paragraph}</BioParagraph>
            ))}
        </BioContainer>

      </Wrapper>
    </>
  )
}

export default Bio;