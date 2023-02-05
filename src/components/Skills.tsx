import styled from "styled-components";
import Wrapper from "./Wrapper";
import theme from "../utils/theme";
import { Accent } from "../utils/constants";

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`

const SkillsHeader = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  color: ${theme.colours.font};
  margin-bottom: 50px;
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
      <SkillsHeader>
        <Accent>Skills</Accent>
      </SkillsHeader>

    </Wrapper>
  )
};

export default Skills;