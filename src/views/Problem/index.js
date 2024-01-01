import React from 'react';
import { ProblemContainer, ContentContainer, ContentWrapper, ContentTitle, ProblemList, ProblemItem, ProblemInfoWrap, ProblemName, ProblemCorrect, ProblemCorrectNum, ProblemButton } from './style';
import TopBar from '../../components/TopBar';

const ProblemDataList = [
  {
    id: 1400,
    name: '1400. 화물차',
    correct: 5,
    date: '2021-10-10',
  },
  { 
    id: 12635,
    name: '12635. 평범한 배낭',
    correct: 7,
    date: '2021-10-09',
  },
  {
    id: 15809,
    name: '15809. 전국시대',
    correct: 6,
    date: '2021-10-08',
  },
]


const Problem = () => {
  function moveProblemPage(number) {
    window.open("https://www.acmicpc.net/problem/" + number, "_blank");
  };

  return (
    <ProblemContainer>
      <TopBar />
      <ContentContainer>
        <ContentWrapper>
          <ContentTitle>오늘의 문제</ContentTitle>
          <ProblemList>
            <ProblemItem>
              <ProblemInfoWrap>
                <ProblemName>12635. 평범한 배낭</ProblemName>
                <ProblemCorrect>
                  맞힌사람
                  <ProblemCorrectNum> 7명</ProblemCorrectNum>
                </ProblemCorrect>
              </ProblemInfoWrap>
              <ProblemButton> 문제 확인하기 </ProblemButton>
            </ProblemItem>
          </ProblemList>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>지난 문제</ContentTitle>
          <ProblemList>
            {ProblemDataList.map((problem, index) => (
              <ProblemItem>
                <ProblemInfoWrap>
                  <ProblemName>{problem.name}</ProblemName>
                  <ProblemCorrect>
                    맞힌사람
                    <ProblemCorrectNum> {problem.correct}명</ProblemCorrectNum>
                  </ProblemCorrect>
                </ProblemInfoWrap>
                <ProblemButton onClick={moveProblemPage.bind(this, problem.id)}>
                  문제 확인하기
                </ProblemButton>
              </ProblemItem>
            ))}
          </ProblemList>
        </ContentWrapper>
      </ContentContainer>
    </ProblemContainer>
  );
};

export default Problem;
