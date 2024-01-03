import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MemberContainer, ContentContainer, ProfileWrapper, ProfileBackgroundImage, ProfileLink, ProfileImage, MemberWrapper, MemberName, MemberUserInfoWrapper, MemberUserInfoText, MemberUserInfoBar, MemberBar, MemberInfoWrapper, MemberInfoRow, MemberInfoItem } from './style';
import TopBar from '../../components/TopBar';


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
      <TopBar />
      <ContentContainer>
        {MemberData.map((member, index) => (
          <ProfileWrapper delay={index * 0.25}>
            <ProfileBackgroundImage>
              <ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                <ProfileImage src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`} />
              </ProfileLink>
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
                <MemberInfoItem blue={true}>0개</MemberInfoItem>
              </MemberInfoRow>
              <MemberInfoRow>
                <MemberInfoItem>해결하지 못한 문제 수</MemberInfoItem>
                <MemberInfoItem blue={true}>0개</MemberInfoItem>
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
