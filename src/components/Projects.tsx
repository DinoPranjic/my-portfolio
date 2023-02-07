import { useEffect } from "react";
import styled from "styled-components";
import Aos from 'aos';

import theme from "../utils/theme";
import { Accent } from "../utils/constants";
import { WSIETImage } from "../assets";
import { ISSTrackerImage } from "../assets";
import { JabberImage } from "../assets";

import Wrapper from "./Wrapper";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const ProjectHeader = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 100px;

`

const ProjectCard = styled.div<{ isReversed: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colours.purpleBackground};
  padding: 50px;
  border-radius: 28px;
  margin-bottom: 100px;
  ${(props) => props.isReversed && 'flex-direction: row-reverse;'}

  ${theme.mediaQuery.mobile} {
    flex-direction: column-reverse;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;

  ${theme.mediaQuery.mobile} {
    max-width: 100%;
  }

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

  ${theme.mediaQuery.mobile} {
    margin-top: 10px;
  }
  
`

const ProjectStack = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 18px;
  color: ${theme.colours.purplePrimary};
  font-weight: 500;
`

const ProjectDescription = styled.p`
  font-family: ${theme.fonts.secondary};
  font-size: 18px;
  color: ${theme.colours.font};
  font-weight: 500;

  ${theme.mediaQuery.mobile} {
    margin-top: 10px;
  }
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

  ${theme.mediaQuery.mobile} {
    margin-top: 10px;

    a {
      font-size: 16px;
    }
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
          <ProjectHeader id="projects">
            <Accent>Projects</Accent>
          </ProjectHeader>
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
          <ProjectCard key={project.title} isReversed={isReversed} data-aos={isReversed ? "slide-left" : "slide-right"}>
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
        )})}
        </ProjectsContainer>
      </Wrapper>
    </>
  )
}

export default Projects;