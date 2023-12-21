import styled, { keyframes } from 'styled-components';

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

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  height: 100vh;
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
  width: calc(100vw - 80px);
  height: 483px;
  overflow: hidden;
  background-color: #121314;
`

const ProblemWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0 40px;
`

const ProblemTitle = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #ffffff;
  border-radius: 24px;
  padding: 8px 16px;
  margin-bottom: 4px;
  flex-shrink: 0;
`

const ProblemName = styled.div`
  animation: ${MoveDown} 1s ease-in-out;
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  flex-grow: 1;
`

const ProblemButton = styled.div`
  animation: ${MoveUp} 1s ease-in-out;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 12px 20px 16px;
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
`

const BackgroundImage = styled.img`
  animation: ${AppearBackground} 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export { HomeContainer, ContentContainer, ProblemContainer, ProblemWrapper, ProblemTitle, ProblemName, ProblemButton, BackgroundImage};
