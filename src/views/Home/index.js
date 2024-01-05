import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HomeContainer, ContentContainer, ProblemContainer, ProblemWrapper, ProblemTitleWrapper, ProblemTitle, ProblemDifficulty, ProblemName, ProblemButton, BackgroundImage, ProblemTags, ProblemTag, ProblemTagText } from './style';
import TopBar from '../../components/TopBar';
import ProblemBackgroundImage from '../../assets/background.png';
import RightArrowIcon from '../../assets/right-arrow-icon.svg';
import Bronze from '../../assets/bronze-small.svg';
import Silver from '../../assets/silver-small.svg';
import Gold from '../../assets/gold-small.svg';
import Platinum from '../../assets/platinum-small.svg';

const Home = () => {
  const [ProblemData, setProblemData] = useState({});
  const [ProblemTagData, setProblemTagData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProblem();
  }, []);
  
  function moveProblemPage(number) {
    window.open("https://www.acmicpc.net/problem/" + number, "_blank");
  };

  function loadProblem() {
    let url = 'https://www.iflab.run/api/show/problem/today';
    axios.get(url)
      .then(response => {
        setProblemData(response.data);
        setIsLoading(false);
        setProblemTagData(JSON.parse(response.data.tags));
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
              <ProblemTitleWrapper>
                <ProblemTitle>오늘의 문제</ProblemTitle>
                <ProblemDifficulty src={ProblemData.difficulty < 6 ? Bronze : ProblemData.difficulty < 11 ? Silver : ProblemData.difficulty < 16 ? Gold : Platinum} />
              </ProblemTitleWrapper>
              <ProblemName>{ProblemData.id}. {ProblemData.title}</ProblemName>
              <ProblemTags>
                {ProblemTagData.map((tag) => (
                  <ProblemTag>
                    <ProblemTagText>{tag.korean}</ProblemTagText>
                    <ProblemTagText>{tag.english}</ProblemTagText>
                  </ProblemTag>
                ))}
              </ProblemTags>
              <ProblemButton onClick={moveProblemPage.bind(this, ProblemData.id)}>
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
