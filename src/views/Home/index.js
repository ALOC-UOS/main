import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HomeContainer, ContentContainer, ProblemContainer, ProblemWrapper, ProblemTitle, ProblemName, ProblemButton, BackgroundImage } from './style';
import TopBar from '../../components/TopBar';
import ProblemBackgroundImage from '../../assets/background.png';
import RightArrowIcon from '../../assets/right-arrow-icon.svg';

const Home = () => {
  const [ProblemData, setProblemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProblem();
  }, []);
  
  function moveProblemPage(number) {
    window.open("https://www.acmicpc.net/problem/" + number, "_blank");
  };

  function loadProblem() {
    let level = 10;
    let url = 'https://www.iflab.run/api/problem/pick/' + level;
    axios.get(url)
      .then(response => {
        setProblemData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }

  return (
    <HomeContainer>
      <TopBar />
      { isLoading ? (
        <ContentContainer>
          <ProblemContainer>
          </ProblemContainer>
        </ContentContainer>
      ) : (
        <ContentContainer>
          <ProblemContainer>
            <ProblemWrapper>
              <ProblemTitle>오늘의 문제</ProblemTitle>
              <ProblemName>{ProblemData.problemId}. {ProblemData.name}</ProblemName>
              <ProblemButton onClick={moveProblemPage.bind(this, ProblemData.problemId)}>
                문제 확인하기
                <img src={RightArrowIcon} alt="right-arrow-icon" />
              </ProblemButton>
            </ProblemWrapper>
            <BackgroundImage src={ProblemBackgroundImage} />
          </ProblemContainer>
        </ContentContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
