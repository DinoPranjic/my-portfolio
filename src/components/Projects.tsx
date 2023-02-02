import styled from "styled-components";
import theme from "../utils/theme";
import { WSIETImage } from "../assets";

import Wrapper from "./Wrapper";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 100px;

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

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colours.purpleBackground};
  padding: 25px 50px 25px 50px;
  border-radius: 28px;
  margin-bottom: 50px;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;

`

const ProjectImage = styled.div`
  display: flex;
  justify-content: flex-end;
  max-height: 40vh;
  max-width: 40vw;

  svg {
    width: 100%;
    height: 100%;
  }
`

const ProjectTitle = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 28px;
  color: ${theme.colours.font};
  
`

const ProjectStack = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 18px;
  color: ${theme.colours.purplePrimary};
`

const ProjectDescription = styled.p`
  font-family: ${theme.fonts.secondary};
  font-size: 18px;
  color: ${theme.colours.font};
`

const ProjectLink = styled.button`
  cursor: pointer;
  background: ${theme.colours.purplePrimary};
  border-radius: 32px;
  border: none;
  height: 40px;
  padding: 0 30px;
  margin-right: 20px;
  color: #fff;
  font-family: ${theme.fonts.secondary};
  font-size: 18px;
  font-weight: bold;
`



const Projects = () => {
  return(
    <>
      <Wrapper>
        <ProjectsContainer>
          <Header id="projects">
            Projects
          </Header>
        </ProjectsContainer>
        <ProjectCard>
          <ProjectInfo>
          <div>
          <ProjectTitle>What Should I Eat Tonight?</ProjectTitle>
          <ProjectStack>
            React, Typescript, Styled-Components, REST API
          </ProjectStack>
          </div>
          <div>
          <ProjectDescription>
          Returns a random recipe with full ingredients list, instructions and links to source and YouTube video.
          </ProjectDescription>
          </div>

          <div>
            <ProjectLink>
              View Code
            </ProjectLink>
            <ProjectLink>
              View Live
            </ProjectLink>
          </div>

          </ProjectInfo>
          <ProjectImage>
          <WSIETImage />
          </ProjectImage>
        </ProjectCard>
      </Wrapper>
    </>
  )
}

export default Projects;