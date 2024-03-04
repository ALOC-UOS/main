import React, { useEffect, useState } from 'react';
import { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle, CardContentWrapper, CardSubscription, CardContent, Icon, Text } from './style';
import LocationIcon from '../../assets/location-icon.svg';
import CalendarIcon from '../../assets/calendar-icon.svg';
import AllSolveIcon from '../../assets/all-solve-icon.svg';
import MemberDotIcon from '../../assets/member-dot-icon.svg';
import MemberPlusIcon from '../../assets/member-plus-icon.svg';

const Card = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardTop>
          <CardLabel> 우리의 흔적 </CardLabel>
          <CardTitle>
            히스토리
          </CardTitle>
        </CardTop>
        <CardContentWrapper>
          <CardSubscription>
            2024년 3월 4일 월요일
          </CardSubscription>
          <CardContent>
            <Icon src={MemberPlusIcon} />
            <Text>
              <Text textColor={'blue'}>조종빈, 김하람</Text>님이 &nbsp;
              <Text textColor={'blue'}>모임</Text>에 합류했어요!
            </Text>
          </CardContent>
          <CardContent>
            <Icon src={MemberDotIcon} />
            <Text>
              <Text textColor={'blue'}>이종우</Text>님이 &nbsp;
              <Text textColor={'gold'}>골드 III</Text>을 달성했어요!
            </Text>
          </CardContent>
          <CardContent>
            <Icon src={MemberDotIcon} />
            <Text>
              <Text textColor={'blue'}>박나은</Text>님이 &nbsp;
              <Text textColor={'silver'}>실버 I</Text>을 달성했어요!
            </Text>
          </CardContent>
        </CardContentWrapper>
        <CardContentWrapper>
          <CardSubscription>
            2024년 3월 3일 일요일
          </CardSubscription>
          <CardContent>
            <Icon src={MemberPlusIcon} />
            <Text>
              <Text textColor={'blue'}>김영진</Text>님이 &nbsp;
              <Text textColor={'blue'}>모임</Text>에 합류했어요!
            </Text>
          </CardContent>
        </CardContentWrapper>
        <CardContentWrapper>
          <CardSubscription>
            2024년 3월 2일 토요일
          </CardSubscription>
          <CardContent>
            <Icon src={MemberDotIcon} />
            <Text>
              <Text textColor={'blue'}>이강민</Text>님이 &nbsp;
              <Text textColor={'gold'}>골드 V</Text>을 달성했어요!
            </Text>
          </CardContent>
        </CardContentWrapper>
      </CardWrapper>
      <CardWrapper>
        <CardTop>
          <CardLabel> 예정된 일정 </CardLabel>
          <CardTitle>
            정기 세미나 - 2회차
          </CardTitle>
        </CardTop>
        <CardContentWrapper>
          <CardContent>
            <Icon src={CalendarIcon} />
            <Text>
              3월 5일 화요일, 오후 7시
            </Text>
          </CardContent>
          <CardContent>
            <Icon src={LocationIcon} />
            <Text>
              중앙도서관 3층, 스터디룸 11실
            </Text>
          </CardContent>
        </CardContentWrapper>
      </CardWrapper>
    </CardContainer>
  );
}

export default Card;
