import styled from "styled-components";

import theme from "../utils/theme";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colours.font};
  padding: 100px 200px 20px 200px;

  ${theme.mediaQuery.mobile} {
    padding: 20px 40px 5px 40px;
  }

  @media (max-width: 625px) {
    padding: 50px 100px 10px 100px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactMessage = styled.h2`
  font-family: ${theme.fonts.main};
  font-size: 40px;
  color: #fff;
`;

const ContactAccent = styled.span`
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: calc(100%);
    height: 10%;
    bottom: 1px;
    background-color: ${theme.colours.purplePrimary};
  }
`;

const ContactLink = styled.a`
  font-family: ${theme.fonts.main};
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  :hover {
    color: #cccccc;
  }
`;

const ContactFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin-top: 100px;

  ${theme.mediaQuery.mobile} {
    width: 100%;
  }

  ${theme.mediaQuery.tablet} {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <footer>
      <ContactContainer id='contact'>
        <MessageContainer>
          <ContactMessage>I'm looking to join a new team.</ContactMessage>
          <ContactMessage>Feel free to <ContactAccent>reach out.</ContactAccent></ContactMessage>
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