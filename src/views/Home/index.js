import React, { useEffect, useState } from 'react';
import { HomeContainer, ContentContainer, ProblemContainer, ProblemWrapper, ProblemTitle, ProblemName, ProblemButton, BackgroundImage } from './style';
import TopBar from '../../components/TopBar';
import ProblemBackgroundImage from '../../assets/background.png';
import RightArrowIcon from '../../assets/right-arrow-icon.svg';

const ProblemData = { 
    id: 12635,
    name: '12635. 평범한 배낭',
    correct: 7,
    date: '2021-10-09',
};

const Home = () => {
  function moveProblemPage(number) {
    window.open("https://www.acmicpc.net/problem/" + number, "_blank");
  };

  return (
    <HomeContainer>
      <TopBar />
      <ContentContainer>
        <ProblemContainer>
          <ProblemWrapper>
            <ProblemTitle>오늘의 문제</ProblemTitle>
            <ProblemName>{ProblemData.name}</ProblemName>
            <ProblemButton onClick={moveProblemPage.bind(this, ProblemData.id)}>
              문제 확인하기
              <img src={RightArrowIcon} />
            </ProblemButton>
          </ProblemWrapper>
          <BackgroundImage src={ProblemBackgroundImage} />
        </ProblemContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
