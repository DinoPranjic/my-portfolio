import { ReactComponentElement, ReactNode } from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
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