import styled from "styled-components";
import Wrapper from "./Wrapper";
import theme from "../utils/theme";
import { Accent } from "../utils/constants";
import { Resume } from "../assets";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-bottom: 100px;

  ${theme.mediaQuery.mobile} {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const SkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  list-style-type: none;
  width: 50%;
  height: 50%;

  ${theme.mediaQuery.mobile} {
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
`

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;

  ${theme.mediaQuery.mobile} {
    width: 100%;
  }
`

const ResumeIcon = styled.svg`
  height: 300px;
`

const ResumeButton = styled.button`
  cursor: pointer;
  background: ${theme.colours.purplePrimary};
  border-radius: 32px;
  border: none;
  height: 40px;
  padding: 0 30px;
  margin-top: 20px;

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

const SkillsHeader = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 100px;

  ${theme.mediaQuery.mobile} {
    margin-bottom: 50px;
  }
`

const Skill = styled.li`
  display: block;
  background-color: ${theme.colours.purplePrimary};
  padding: 10px;
  border-radius: 10px;
  margin: 0 10px 10px 0;
  color: #fff;
  font-weight: bold;
`


const stack = [
  'React', 
  'React Hooks',
  'TypeScript',
  'JavaScript',
  'Styled Components',
  'NodeJS',
  'ExpressJS',
  'Redux',
  'Ruby',
  'Ruby on Rails',
  'SQL',
  'Firebase',
  'Git Version Control',
  'REST API',
  'HTML',
  'CSS',
  'SCSS'
];

const Skills = () => {
  return(
    <Wrapper>
      <SkillsHeader id='skills'>
        <Accent>Skills</Accent>
      </SkillsHeader>
      <Container>
      <SkillsContainer data-aos='zoom-in-right'>
        {stack.map((item) => (
          <Skill>{item}</Skill>
        ))}
      </SkillsContainer>
      <ResumeContainer data-aos='zoom-in-left'>
        <ResumeIcon as={Resume} />
        <ResumeButton>
          <a href='/assets/resume.pdf' target='_blank'>View My Resume</a>
        </ResumeButton>
      </ResumeContainer>
      </Container>

    </Wrapper>
  )
};

export default Skills;