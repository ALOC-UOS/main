import React from 'react';
import { MemberContainer, ContentContainer, ProfileWrapper, ProfileBackgroundImage, ProfileLink, ProfileImage, MemberWrapper, MemberName, MemberUserInfoWrapper, MemberUserInfoText, MemberUserInfoBar, MemberBar, MemberInfoWrapper, MemberInfoRow, MemberInfoItem } from './style';
import TopBar from '../../components/TopBar';

const MemberDataList = [
  {
    githubId: 'Dodolist',
    id: 43953794,
    name: '이종우',
    class: 20,
    date: '2024.01.01',
    solved: 24,
    unsolved: 5,
  },
  {
    githubId: 'SuperStarKang',
    id: 124661981,
    name: '이강민',
    class: 20,
    date: '2024.01.01',
    solved: 19,
    unsolved: 4,
  }
]


const Member = () => {
  return (
    <MemberContainer>
      <TopBar />
      <ContentContainer>
        {MemberDataList.map((member, index) => (
          <ProfileWrapper delay={index * 0.25}>
            <ProfileBackgroundImage>
              <ProfileLink href={`https://github.com/${member.githubId}`} target="_blank">
                <ProfileImage src={`https://avatars.githubusercontent.com/u/${member.id}?v=4`} />
              </ProfileLink>
            </ProfileBackgroundImage>
            <MemberWrapper>
            <MemberName>{member.name}</MemberName>
            <MemberUserInfoWrapper>
              <MemberUserInfoText>{member.class}학번</MemberUserInfoText>
              <MemberUserInfoBar />
              <MemberUserInfoText>{member.date}</MemberUserInfoText>
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
