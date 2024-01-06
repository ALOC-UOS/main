import styled, { keyframes } from 'styled-components';

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

const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  padding: 120px 100px;
`

const ContentContainer = styled.div`
  animation: ${AppearProfile} 1s ease forwards;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ContentTitle = styled.div`
  color: ${(props) => props.theme.contentText};
  font-size: 40px;
  font-weight: bold;
`

const ProblemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ProblemItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.foreground};
  padding: 24px;
  border-radius: 16px;
`

const ProblemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ProblemName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${(props) => props.theme.titleText};
  font-size: 24px;
  font-weight: 500;
`

const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`

const ProblemTags = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-grow: 1;
  gap: 8px;
`

const ProblemTag = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 12px;
  padding: 4px 8px;
  gap: 4px;
`

const ProblemTagText = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 12px;
  font-weight: 500;
`

const ProblemCorrect = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.subText};
  font-size: 16px;
  gap: 8px;
`

const ProblemCorrectNum = styled.div`
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`

const ProblemButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  min-width: 120px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primary};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`

const ProblemRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export { ProblemContainer, ContentContainer, ContentWrapper, ContentTitle, ProblemList, ProblemItem, ProblemInfoWrap, ProblemName, ProblemDifficulty, ProblemTags, ProblemTag, ProblemTagText, ProblemCorrect, ProblemCorrectNum, ProblemRightWrap, ProblemButton };
