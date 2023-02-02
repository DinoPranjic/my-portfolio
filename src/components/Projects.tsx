import styled from "styled-components";
import theme from "../utils/theme";
import { WSIETImage } from "../assets";
import { ISSTrackerImage } from "../assets";
import { JabberImage } from "../assets";

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

const ProjectCard = styled.div<{ isReversed: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colours.purpleBackground};
  padding: 50px;
  border-radius: 28px;
  margin-bottom: 100px;
  ${(props) => props.isReversed && 'flex-direction: row-reverse;'}
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

  a {
  color: #fff;
  font-family: ${theme.fonts.secondary};
  font-size: 18px;
  font-weight: bold;
  }

  :hover {
    background: ${theme.colours.buttonHover};
  }

`

const projects = [
  {
    image: <WSIETImage />,
    title: 'What Should I Eat Tonight?',
    stack: 'React, TypeScript, Styled-Components, Rest API',
    code: 'https://github.com/DinoPranjic/What-Should-I-Make-Tonight',
    live: 'https://www.dinopranjic.dev/what-should-i-eat-tonight',
    description: 'Returns a random recipe with full ingredients list, instructions and links to source and YouTube video.',
  },
  {
    image: <ISSTrackerImage />,
    title: 'ISS Tracker',
    stack: 'React, TypeScript, Styled-Components, Rest API',
    code: 'https://github.com/DinoPranjic/ISS-Tracker',
    live: 'https://www.dinopranjic.dev/iss-tracker',
    description: 'Track the position of the International Space Station on an interactive map.',
  },
  {
    image: <JabberImage />,
    title: 'Jabber',
    stack: 'React, JavaScript, Redux, ExpressJS, Styled-Components, Firebase',
    code: 'https://github.com/DinoPranjic/jabber',
    live: 'https://jabber-cd1e1.web.app/',
    description: 'A feature-rich, multi-user messaging app. Log in with Google, and chat with others Slack-style, or join a video call.',
  }
];



const Projects = () => {
  return(
    <>
      <Wrapper>
        <ProjectsContainer>
          <Header id="projects">
            Projects
          </Header>
        {projects.map((project, index) => (
          <ProjectCard isReversed={index % 2 !== 0}>
            <ProjectInfo>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectStack>{project.stack}</ProjectStack>
              </div>

              <div>
                <ProjectDescription>{project.description}</ProjectDescription>
              </div>

              <div>
                <ProjectLink>
                  <a href={project.code} target="blank">View Code</a>
                </ProjectLink>

                <ProjectLink>
                  <a href={project.live} target="blank">View Live</a>
                </ProjectLink>
              </div>
            </ProjectInfo>
            <ProjectImage>
              {project.image}
            </ProjectImage>
          </ProjectCard>
        ))}
        </ProjectsContainer>
      </Wrapper>
    </>
  )
}

export default Projects;