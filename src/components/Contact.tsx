import styled from "styled-components";
import { Accent } from "../utils/constants";

import theme from "../utils/theme";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colours.font};
  padding: 100px 200px 20px 200px;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
const ContactMessage = styled.h2`
  font-family: ${theme.fonts.main};
  font-size: 40px;
  color: #fff;
`

const ContactLink = styled.a`
  font-family: ${theme.fonts.main};
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  :hover {
    color: #cccccc;
  }
`

const ContactFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30vw;
  margin-top: 100px;
`

const Contact = () => {
  return (
    <footer>
      <ContactContainer id='contact'>
        <MessageContainer>
          <ContactMessage>I'm looking to join a new team.</ContactMessage>
          <ContactMessage>Feel free to <Accent>reach out.</Accent></ContactMessage>
        </MessageContainer>
        <ContactFooter>
          <ContactLink href='https://www.linkedin.com/in/dinopranjic1992' target='_blank'>LinkedIn</ContactLink>
          <ContactLink href='https://github.com/DinoPranjic' target='_blank'>Github</ContactLink>
          <ContactLink href="mailto:dino@dinopranjic.dev">Email</ContactLink>
        </ContactFooter>
      </ContactContainer>
    </ footer>
  )
};

export default Contact;