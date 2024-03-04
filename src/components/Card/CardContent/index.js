import React from 'react';
import { CardContentWrapper, CardSubscription, CardContent, Icon, Text } from './style';
import AllSolveIcon from '../../../assets/all-solve-icon.svg';
import MemberDotIcon from '../../../assets/member-dot-icon.svg';
import MemberPlusIcon from '../../../assets/member-plus-icon.svg';

const CardContentContainer = ({ subscription, contents }) => {

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
    <CardContentWrapper>
      <CardSubscription>
        {subscription}
      </CardSubscription>
      {contents.map((content, index) => {
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
    </CardContentWrapper>
  );
}

export default CardContentContainer;
