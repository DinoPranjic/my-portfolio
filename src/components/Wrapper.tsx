import { ReactNode } from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  margin: 0 auto;

`

const Wrapper = ({ children }: {children: ReactNode}) => {
  return(
    <WrapperContainer>
      {children}
    </WrapperContainer>
  )
}

export default Wrapper;