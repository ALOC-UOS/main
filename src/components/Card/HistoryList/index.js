import React from 'react';
import { HistoryListContainer, CardWrapper, CardSubscription, CardContent, Icon, Text } from './style';
import AllSolveIcon from '../../../assets/all-solve-icon.svg';
import MemberDotIcon from '../../../assets/member-dot-icon.svg';
import MemberPlusIcon from '../../../assets/member-plus-icon.svg';

const HistoryList= () => {
  const HistoryData = [
    {
      subscription: '2024년 3월 20일 수요일',
      contents: [
        {
          Icon: MemberDotIcon,
          Name: '박주영',
          Tier: '브론즈 IV'
        }
      ]
    },
    {
      subscription: '2024년 3월 19일 화요일',
      contents: [
        {
          Icon: MemberDotIcon,
          Name: '박나은',
          Tier: '골드 V'
        }
      ]
    },
    {
      subscription: '2024년 3월 18일 월요일',
      contents: [
        {
          Icon: MemberDotIcon,
          Name: '문재영',
          Tier: '골드 IV'
        }
      ]
    },
    {
      subscription: '2024년 3월 14일 목요일',
      contents: [
        {
          Icon: MemberDotIcon,
          Name: '김영진',
          Tier: '골드 V'
        },
      ]
    },
    {
      subscription: '2024년 3월 11일 월요일',
      contents: [
        {
          Icon: MemberDotIcon,
          Name: '조수아',
          Tier: '골드 IV'
        },
        {
          Icon: MemberDotIcon,
          Name: '박상윤',
          Tier: '실버 I'
        }
      ]
    },
    {
      subscription: '2024년 3월 8일 금요일',
      contents: [
        {
          Icon: MemberPlusIcon,
          Name: '박주영'
        },
      ]
    },
    {
      subscription: '2024년 3월 7일 목요일',
      contents: [
        {
          Icon: MemberPlusIcon,
          Name: '정다현'
        },
      ]
    },
    /*
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
    */
  ];


  const getTier = (tier) => {
    if (tier.includes('브론즈')) {
      return 'bronze';
    } else if (tier.includes('실버')) {
      return 'silver';
    } else if (tier.includes('골드')) {
      return 'gold';
    } else if (tier.includes('플래티넘')) {
      return 'platinum';
    }
  }
  return (
    <HistoryListContainer>
      {HistoryData.map((data, index) => {
        return (
          <CardWrapper key={index}>
            <CardSubscription>
              {data.subscription}
            </CardSubscription>
            {data.contents.map((content, index) => {
              return (
                <CardContent key={index}>
                  <Icon src={content.Icon} />
                  {content.Icon === MemberPlusIcon ? (
                    <Text>
                      <Text textColor={'blue'}>{content.Name}</Text>님이 &nbsp;
                      <Text textColor={'blue'}>모임</Text>에 합류했어요!
                    </Text>
                  ) :
                    content.Icon === MemberDotIcon ? (
                      <Text>
                        <Text textColor={'blue'}>{content.Name}</Text>님이 &nbsp;
                        <Text textColor={content.Tier && getTier(content.Tier)}>
                          {content.Tier}
                        </Text>을 달성했어요!
                      </Text>
                  ) : (
                    <Text>
                      <Text>{content.Text}</Text>
                    </Text>
                  )}
                </CardContent>
              );
            })}
          </CardWrapper>
        );
      })}
    </HistoryListContainer>
  );
}

export default HistoryList;
