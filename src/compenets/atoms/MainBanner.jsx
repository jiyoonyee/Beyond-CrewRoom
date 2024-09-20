import styled from "styled-components";

const MainBanner = () => {
  return (
    <>
      <MainBannerWrap>
        <MainBannerSiteName>Crew Room</MainBannerSiteName>
        <MainBannerSiteIntroduce>
          학교 동아리에 참여하여 다양한 활동을 통해 즐거운 학교 생활을
          <br />
          만들어보세요!
        </MainBannerSiteIntroduce>
      </MainBannerWrap>
    </>
  );
};

const MainBannerWrap = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(../src/assets/image/mainBanner.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const MainBannerSiteName = styled.p`
  font-size: 75px;
  font-weight: bold;
  color: white;
`;
const MainBannerSiteIntroduce = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
export default MainBanner;
