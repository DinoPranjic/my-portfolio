import styled from "styled-components";
import theme from "../utils/theme";

import Wrapper from "./Wrapper";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectsHeader = styled.h2`
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

const Projects = () => {
  return(
    <>
      <Wrapper>
        <ProjectsContainer>
          <ProjectsHeader id="projects">
            Projects
          </ProjectsHeader>
        </ProjectsContainer>
      </Wrapper>
    </>
  )
}

export default Projects;