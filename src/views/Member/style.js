import styled, { css, keyframes } from 'styled-components';

const AppearProfile = keyframes`
  0% {
    transform: translateY(-24px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  height: 100vh;
`

const ContentContainer = styled.div`
  position: fixed;

  top: 50%;
  left: 0px;
  right: 0px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 24px 40px;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ProfileWrapper = styled.div`
  animation: ${AppearProfile} 1s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  min-width: 280px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  opacity: 0;
`

const ProfileBackgroundImage = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.foreground};
  height: 120px;

  ${(props) => props.solved && css`
    background-color: ${(props) => props.theme.primary};
  `}

`

const ProfileLink = styled.a`
  position: absolute;
  left: 24px;
  bottom: -64px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &::after {
    transition: all 0.3s ease;
    content: "Github 보기";
    color: #ffffff;
    opacity: 0;
  }
  &:hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      opacity: 1;
    }
    & > img {
      filter: brightness(0.5);
      transform: scale(1.1);
    }
  }
  &:active {
    & > img {
      filter: brightness(0.3);
      transform: scale(1);
    }
  }
`

const ProfileImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`
const ProfileRankWrap = styled.a`
  position: absolute;
  top: 100%;
  right: 16px;
  width: 56px;
  height: 72px;

  &:hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      opacity: 1;
    }
    & > img {
      filter: brightness(0.5);
    }
  }
  &:active {
    & > img {
      filter: brightness(0.3);
    }
  }
`

const ProfileRank = styled.img`
  width: 56px;
  height: 72px;
`

const ProfileNumber = styled.img`
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 24px;
  height: 24px;
  transform: translateX(-50%);
  opacity: 0.8;
`

const MemberWrapper = styled.div`
  background-color: #ffffff;
  padding: 80px 12px 24px 12px;
`

const MemberName = styled.div`
  color: ${(props) => props.theme.titleText};
  font-size: 24px;
  margin-left: 12px;
`

const MemberUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
`

const MemberUserInfoText = styled.div`
  color: ${(props) => props.theme.subText};
  font-size: 16px;
`

const MemberUserInfoBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: #00000010;
  margin: 0 8px;
  border-radius: 1px;
  transform: translateY(1px);
`

const MemberBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #00000010;
  border-radius: 1px;
  margin: 12px 0;
`

const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  gap: 8px;
`

const MemberInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const MemberInfoItem = styled.div`
  color: ${(props) => props.theme.subText};
  font-size: 16px;

  ${(props) => props.blue && css`
    color: ${(props) => props.theme.primary};
  `}
`


export { MemberContainer, ContentContainer, ProfileWrapper, ProfileBackgroundImage, ProfileLink, ProfileImage, ProfileRankWrap, ProfileRank, ProfileNumber, MemberWrapper, MemberName, MemberUserInfoWrapper, MemberUserInfoText, MemberUserInfoBar, MemberBar, MemberInfoWrapper, MemberInfoRow, MemberInfoItem };
