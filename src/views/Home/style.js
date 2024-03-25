import styled, { css, keyframes } from 'styled-components';

const MoveUp = keyframes`
  0% {
    transform: translateY(16px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const MoveDown = keyframes`
  0% {
    transform: translateY(-16px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const DisappearUp = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-16px);
    opacity: 0;
  }
`


const AppearBackground = keyframes`
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const BrightenBackground = keyframes`
  0% {
    filter: brightness(1) hue-rotate(0deg) blur(0px);
    transform: scale(1);
  }
  100% {
    filter: brightness(0.8) hue-rotate(20deg) blur(2px);
    transform: scale(1.05);
  }
`

const MoveArrow = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(8px);
  }
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  padding-bottom: 48px;
`

const ContentContainer = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ProblemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  width: calc(100% - 80px);
  height: 560px;
  overflow: hidden;
  background-color: #121314;
  @media (max-width: 480px) {
    width: calc(100% - 32px);
  }
`

const ProblemWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0 40px;
`

const ProblemTitleWrapper = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  padding: 8px 8px 8px 16px;
  margin-bottom: 4px;
  flex-shrink: 0;
`

const ProblemTitle = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`

const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`

const ProblemName = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  flex-shrink: 0;
  text-align: center;
  margin-bottom: 8px;
`

const ProblemButton = styled.div`
  animation: ${MoveUp} 1s ease-in-out;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  margin-top: auto;
  min-width: 120px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primary};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  gap: 8px;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
  & > img {
    animation: ${MoveArrow} 1s ease-in-out infinite alternate;
  }
`

const BackgroundImage = styled.img`
  animation: ${AppearBackground} 1s ease-in-out,
            ${BrightenBackground} 3s 1s ease-in-out alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProblemTags = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`

const ProblemTag = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.secondary}80;
  padding: 4px 12px;
  gap: 4px;
`

const ProblemTagText = styled.div`
  color: ${(props) => props.theme.secondary};
  font-size: 16px;
  font-weight: 500;
`

const SolveMemberContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const MemberWrapper = styled.div`
  animation: ${MoveUp} 1s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px);
  padding: 8px 12px 8px 8px;

  ${props => props.isShow && css`
    animation: ${DisappearUp} 1s ease-in-out forwards;
  `}
`

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 4px;
  border-radius: 50%;
`

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-right: 12px;
`

const MemberName = styled.div`
  color: #408cff;
  font-size: 14px;
  font-weight: 500;
`

const SolveTime = styled.div`
  color: #ffffff80;
  font-size: 12px;
  font-weight: 500;
`

export { HomeContainer, ContentContainer, ProblemContainer, ProblemWrapper, ProblemTitleWrapper, ProblemTitle, ProblemDifficulty, ProblemName, ProblemButton, BackgroundImage, ProblemTags, ProblemTag, ProblemTagText, SolveMemberContainer, MemberWrapper, ProfileImage, Description, MemberName, SolveTime };
