import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MemberContainer, ContentContainer, ProfileWrapper, ProfileBackgroundImage, ProfileLink, ProfileImage, ProfileRankWrap, ProfileRank, ProfileNumber, MemberWrapper, MemberName, MemberUserInfoWrapper, MemberUserInfoText, MemberUserInfoBar, MemberBar, MemberInfoWrapper, MemberInfoRow, MemberInfoItem } from './style';
import TopBar from '../../components/TopBar';
import Bronze from '../../assets/bronze.svg';
import Silver from '../../assets/silver.svg';
import Gold from '../../assets/gold.svg';
import Platinum from '../../assets/platinum.svg';
import Number5 from '../../assets/number-5.svg';
import Number4 from '../../assets/number-4.svg';
import Number3 from '../../assets/number-3.svg';
import Number2 from '../../assets/number-2.svg';
import Number1 from '../../assets/number-1.svg';


const Member = () => {
  const [MemberData, setMemberData] = useState([]);

  useEffect(() => {
    loadMemberData();
  }, []);

  function loadMemberData() {
    let url = 'https://www.iflab.run/api/show/user';
    axios.get(url)
      .then(response => {
        setMemberData(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }
  return (
    <MemberContainer>
      <TopBar active={true} />
      <ContentContainer>
        {MemberData.map((member, index) => (
          <ProfileWrapper delay={index * 0.25}>
            <ProfileBackgroundImage solved={member.todaySolved}>
              <ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                <ProfileImage src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`} />
              </ProfileLink>
              <ProfileRankWrap href={`https://solved.ac/${member.baekjoonId}`} target="_blank">
                <ProfileRank src={parseInt(member.rank / 10) === 1 ? Bronze : parseInt(member.rank / 10) === 2 ? Silver : parseInt(member.rank / 10) === 3 ? Gold : Platinum} />
                <ProfileNumber src={member.rank % 10 === 1 ? Number1 : member.rank % 10 === 2 ? Number2 : member.rank % 10 === 3 ? Number3 : member.rank % 10 === 4 ? Number4 : Number5} />
              </ProfileRankWrap>
            </ProfileBackgroundImage>
            <MemberWrapper>
            <MemberName>{member.username}</MemberName>
            <MemberUserInfoWrapper>
              <MemberUserInfoText>{member.studentId}학번</MemberUserInfoText>
              <MemberUserInfoBar />
              <MemberUserInfoText>{member.joinedAt}</MemberUserInfoText>
            </MemberUserInfoWrapper>
            <MemberBar />
            <MemberInfoWrapper>
              <MemberInfoRow>
                <MemberInfoItem>해결한 문제 수</MemberInfoItem>
                <MemberInfoItem blue={true}>{member.solved}개</MemberInfoItem>
              </MemberInfoRow>
              <MemberInfoRow>
                <MemberInfoItem>해결하지 못한 문제 수</MemberInfoItem>
                <MemberInfoItem blue={true}>{member.unsolved}개</MemberInfoItem>
              </MemberInfoRow>
            </MemberInfoWrapper>
          </MemberWrapper>
        </ProfileWrapper>
        ))}
      </ContentContainer>
    </MemberContainer>
  );
};

export default Member;
