import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HomeContainer, ContentContainer, ProblemContainer, ProblemWrapper, ProblemTitleWrapper, ProblemTitle, ProblemDifficulty, ProblemName, ProblemButton, BackgroundImage, ProblemTags, ProblemTag, ProblemTagText, SolveMemberContainer, MemberWrapper, ProfileImage, Description, MemberName, SolveTime } from './style';
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
  const [SolvedMemberList, setSolvedMemberList] = useState([]);
  const [isShowMemberNumber, setIsShowMemberNumber] = useState(0);
  const [isShowMember, setIsShowMember] = useState(false);

  useEffect(() => {
    loadProblem();
  }, []);

  useEffect(() => {
    if (ProblemData.id) {
      setTimeout(() => {
        loadSolveMember();

        setIsShowMember(false);
        setTimeout(() => {
          setIsShowMember(true);
        }, 4000);
      }, 1000);
    }
  }, [ProblemData]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isShowMemberNumber + 1 === SolvedMemberList.length) {
        setIsShowMemberNumber(0);
      } else {
        setIsShowMemberNumber(isShowMemberNumber + 1);
      }

      setIsShowMember(false);
      setTimeout(() => {
        setIsShowMember(true);
      }, 4000);
    }, 5000);

    return () => {
      clearInterval(timer);
    }
  }, [isShowMemberNumber, SolvedMemberList]);
  
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

  function loadSolveMember() {
    let url = 'https://www.iflab.run/api/show/problem/solved-user/' + ProblemData.id;

    axios.get(url)
      .then(response => {
        setSolvedMemberList(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  };

  function solvedAtAgo(solvedAt) {
    const now = new Date();
    const nowHour = now.getHours();
    const nowMinute = now.getMinutes();
    const nowSecond = now.getSeconds();

    const solvedAtHour = Number(solvedAt[0]) * 10 + Number(solvedAt[1]);
    const solvedAtMinute = Number(solvedAt[3]) * 10 + Number(solvedAt[4]);
    const solvedAtSecond = Number(solvedAt[6]) * 10 + Number(solvedAt[7]);

    if (nowHour - solvedAtHour > 0) {
      return nowHour - solvedAtHour + "시간 전";
    } else if (nowMinute - solvedAtMinute > 0) {
      return nowMinute - solvedAtMinute + "분 전";
    } else if (nowSecond - solvedAtSecond > 0) {
      return nowSecond - solvedAtSecond + "초 전";
    } else {
      return "방금 전";
    }
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
                {ProblemTagData.map((tag, index) => (
                  <ProblemTag key={index}>
                    <ProblemTagText># {tag.korean}</ProblemTagText>
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
            { SolvedMemberList.length > 0 && (
              <SolveMemberContainer>
                <MemberWrapper isShow={isShowMember}>
                  <ProfileImage src={`https://avatars.githubusercontent.com/u/${SolvedMemberList[isShowMemberNumber].profileNumber}`} />
                  <Description>
                    <MemberName> {SolvedMemberList[isShowMemberNumber].username} </MemberName>
                    님이 문제를 풀었어요.
                  </Description>
                  <SolveTime> {solvedAtAgo(SolvedMemberList[isShowMemberNumber].solvedAt)} </SolveTime>
                </MemberWrapper>
              </SolveMemberContainer>
            )}
          </ProblemContainer>
        </ContentContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
