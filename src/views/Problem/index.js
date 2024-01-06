import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProblemContainer, ContentContainer, ContentWrapper, ContentTitle, ProblemList, ProblemItem, ProblemInfoWrap, ProblemName, ProblemDifficulty, ProblemTags, ProblemTag, ProblemTagText, ProblemCorrect, ProblemCorrectNum, ProblemRightWrap, ProblemButton } from './style';
import TopBar from '../../components/TopBar';
import Bronze from '../../assets/bronze-small.svg';
import Silver from '../../assets/silver-small.svg';
import Gold from '../../assets/gold-small.svg';
import Platinum from '../../assets/platinum-small.svg';

const Problem = () => {
  const [ProblemData, setProblemData] = useState([]);

  useEffect(() => {
    loadProblemData();
  }, []);

  function moveProblemPage(number) {
    window.open("https://www.acmicpc.net/problem/" + number, "_blank");
  };

  function loadProblemData() {
    let url = 'https://www.iflab.run/api/show/problem';
    axios.get(url)
      .then(response => {
        setProblemData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  };

  return (
    <ProblemContainer>
      <TopBar />
      <ContentContainer>
        <ContentWrapper>
          <ContentTitle>오늘의 문제</ContentTitle>
          <ProblemList>
            {ProblemData.length > 0 && (
              <ProblemItem>
                <ProblemInfoWrap>
                  <ProblemName>
                    <ProblemDifficulty src={ProblemData[0].difficulty < 6 ? Bronze : ProblemData[0].difficulty < 11 ? Silver : ProblemData[0].difficulty < 16 ? Gold : Platinum} />
                    {ProblemData[0].id}. {ProblemData[0].title}
                  </ProblemName>
                  <ProblemTags>
                    {JSON.parse(ProblemData[0].tags).map((tag) => (
                      <ProblemTag>
                        <ProblemTagText>{tag.korean}</ProblemTagText>
                        <ProblemTagText>{tag.english}</ProblemTagText>
                      </ProblemTag>
                    ))}
                  </ProblemTags>
                </ProblemInfoWrap>
                <ProblemRightWrap>
                  <ProblemCorrect>
                    맞힌사람
                    <ProblemCorrectNum> {ProblemData[0].solved}명</ProblemCorrectNum>
                  </ProblemCorrect>
                  <ProblemButton onClick={() => moveProblemPage(ProblemData[0].id)}>
                    문제 확인하기
                  </ProblemButton>
                </ProblemRightWrap>
              </ProblemItem>
            )}
          </ProblemList>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>과거의 문제</ContentTitle>
          <ProblemList>
            {ProblemData.slice(1).map((problem, index) => (
              <ProblemItem key={index}>
                <ProblemInfoWrap>
                  <ProblemName>
                    <ProblemDifficulty src={problem.difficulty < 6 ? Bronze : problem.difficulty < 11 ? Silver : problem.difficulty < 16 ? Gold : Platinum} />
                    {problem.id}. {problem.title}
                  </ProblemName>
                  <ProblemTags>
                    {JSON.parse(problem.tags).map((tag) => (
                      <ProblemTag>
                        <ProblemTagText>{tag.korean}</ProblemTagText>
                        <ProblemTagText>{tag.english}</ProblemTagText>
                      </ProblemTag>
                    ))}
                  </ProblemTags>
                </ProblemInfoWrap>
                <ProblemRightWrap>
                  <ProblemCorrect>
                    맞힌사람
                    <ProblemCorrectNum> {problem.solved}명</ProblemCorrectNum>
                  </ProblemCorrect>
                  <ProblemButton onClick={() => moveProblemPage(problem.id)}>
                    문제 확인하기
                  </ProblemButton>
                </ProblemRightWrap>
              </ProblemItem>
            ))}
          </ProblemList>
        </ContentWrapper>
      </ContentContainer>
    </ProblemContainer>
  );
};

export default Problem;
