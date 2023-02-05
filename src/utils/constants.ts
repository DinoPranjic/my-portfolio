import styled from "styled-components";
import theme from "./theme";

const Accent = styled.span`
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

export {
  Accent
}