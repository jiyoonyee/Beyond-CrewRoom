import styled from "styled-components";
import MainBanner from "../compenets/atoms/MainBanner";

const MainPage = () => {
  return (
    <>
      <MainWrap>
        <MainBanner></MainBanner>
      </MainWrap>
    </>
  );
};

const MainWrap = styled.main`
  width: 100%;
  background-color: #161e25;
`;

export default MainPage;
