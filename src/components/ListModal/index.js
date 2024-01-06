import React from 'react';
import { ListModalContainer, ListModalTopBar, ModalTitle, Wrapper, IconWrapper, Icon, CloseButton, Divider, MemberList, MemberItem, ProfileImage, MemberWrapper, MemberName, MemberBaekjoonId } from './style';
import MemberIcon from '../../assets/member-icon.svg';
import closeButton from '../../assets/close-button.svg';

const ListModal = ({ isOpen, memberListData, closeModal }) => {
  return (
    <ListModalContainer isOpen={isOpen}>
      <ListModalTopBar>
        <Wrapper>
          <ModalTitle> 맞힌 사람 목록</ModalTitle>
          <IconWrapper>
            <Icon src={MemberIcon} /> {memberListData.length}명
          </IconWrapper>
        </Wrapper>
        <CloseButton src={closeButton} onClick={closeModal} />
      </ListModalTopBar>
      <Divider />
      <MemberList>
        {memberListData.map((member) => (
          <MemberItem>
            <ProfileImage src={`https://avatars.githubusercontent.com/u/${member.profileNumber}?v=4`} />
            <MemberWrapper>
              <MemberName>{member.username}</MemberName>
              <MemberBaekjoonId>{member.baekjoonId}</MemberBaekjoonId>
            </MemberWrapper>
          </MemberItem>
        ))}
      </MemberList>
    </ListModalContainer>
  );
}

export default ListModal
