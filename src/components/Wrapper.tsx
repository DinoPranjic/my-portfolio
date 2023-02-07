import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../utils/theme";

const WrapperContainer = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  margin: 0 auto;

  ${theme.mediaQuery.mobile} {
    padding-left: 15px;
    padding-right: 15px;
    overflow-x: hidden;
  }

  ${theme.mediaQuery.tablet} {
    padding-left: 50px;
    padding-right: 50px;
    overflow-x: hidden;
  }
`

const Wrapper = ({ children }: {children: ReactNode}) => {
  return(
    <WrapperContainer>
      {children}
    </WrapperContainer>
  )
}

export default Wrapper;