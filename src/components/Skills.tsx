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
`;

const SkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  list-style-type: none;
  width: 50%;
  height: 50%;
`

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
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
      <SkillsContainer>
        {stack.map((item) => (
          <Skill>{item}</Skill>
        ))}
      </SkillsContainer>
      <ResumeContainer>
        <ResumeIcon as={Resume} />
        <ResumeButton>
          <a href='#' target='_blank'>View My Resume</a>
        </ResumeButton>
      </ResumeContainer>
      </Container>

    </Wrapper>
  )
};

export default Skills;