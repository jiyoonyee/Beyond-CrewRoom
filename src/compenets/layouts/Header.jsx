import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeadeWrap>
        <NavWrap>
          <a href="#">
            <LogoImg src="./src/assets/image/logo.png"></LogoImg>
          </a>

          <HeaderNavBar>
            <HeaderNavItem>
              <a href="#">동아리 목록</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="#">내 동아리</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="#">마이페이지</a>
            </HeaderNavItem>
          </HeaderNavBar>
        </NavWrap>

        <HeaderUserProfile></HeaderUserProfile>
      </HeadeWrap>
    </>
  );
};

const HeadeWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
  height: 70px;
  position: sticky;
  top: 0px;
`;

const LogoImg = styled.img`
  width: 200px;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const HeaderNavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
`;

const HeaderNavItem = styled.li`
  text-align: center;
  & > a {
    font-weight: bold;
    font-size: 18px;
  }
`;

const HeaderUserProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 1000px;
  border: 1px solid black;
`;

export default Header;
