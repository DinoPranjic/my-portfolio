import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../utils/theme";

const WrapperContainer = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  margin: 0 auto;

  ${theme.mediaQuery.mobile} {
    padding: 15px;
    overflow-x: hidden;
  }

  ${theme.mediaQuery.tablet} {
    padding: 50px;
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