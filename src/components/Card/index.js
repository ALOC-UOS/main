import React, { useEffect, useState } from 'react';
import { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle } from './style';
import LocationIcon from '../../assets/location-icon.svg';
import CalendarIcon from '../../assets/calendar-icon.svg';
import AllSolveIcon from '../../assets/all-solve-icon.svg';
import MemberDotIcon from '../../assets/member-dot-icon.svg';
import MemberPlusIcon from '../../assets/member-plus-icon.svg';
import CardContent from './CardContent';
import ProblemList from './ProblemList';

const Card = () => {
  const dummyData = [
    {
      subscription: '2024년 3월 4일 월요일',
      contents: [
        {
          Icon: MemberPlusIcon,
          Name: '조종빈, 김하람'
        },
        {
          Icon: MemberDotIcon,
          Name: '이종우',
          Tier: '골드 III'
        },
        {
          Icon: MemberDotIcon,
          Name: '박나은',
          Tier: '실버 I'
        }
      ]
    },
    {
      subscription: '2024년 3월 3일 월요일',
      contents: [{
        Icon: MemberPlusIcon,
        Name: '김영진'
      }]
    },
    {
      subscription: '2024년 3월 2일 토요일',
      contents: [{
        Icon: MemberDotIcon,
        Name: '이강민',
        Tier: '골드 V'
      }]
    },
  ];

  const dummyData2 = [
    {
      contents: [
        {
          Icon: CalendarIcon,
          Text: '3월 5일 화요일, 오후 7시'
        },
        {
          Icon: LocationIcon,
          Text: '중앙도서관 3층, 스터디룸 11실'
        }
      ]
    },
  ];

  return (
    <CardContainer>
      <CardWrapper>
        <CardTop>
          <CardLabel> 우리의 흔적 </CardLabel>
          <CardTitle>
            히스토리
          </CardTitle>
        </CardTop>
        {dummyData.map((data, index) => {
          return (
            <CardContent
              key={index}
              subscription={data.subscription}
              contents={data.contents}
            />
          );
        })}
      </CardWrapper>
      <CardWrapper>
        <CardTop>
          <CardLabel> 예정된 일정 </CardLabel>
          <CardTitle>
            정기 세미나 - 2회차
          </CardTitle>
        </CardTop>
        {dummyData2.map((data, index) => {
          return (
            <CardContent
              key={index}
              subscription={data.subscription}
              contents={data.contents}
            />
          );
        })}
      </CardWrapper>
      <CardWrapper>
        <CardTop>
          <CardLabel> 지나간 문제</CardLabel>
          <CardTitle>
            문제 목록
          </CardTitle>
        </CardTop>
        <ProblemList />
      </CardWrapper>
    </CardContainer>
  );
}

export default Card;
