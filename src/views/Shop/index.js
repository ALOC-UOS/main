import React from 'react';
import TopBar from '../../components/TopBar';
import BlackScreen from '../../components/BlackScreen';
import AlertModal from '../../components/Modal/AlertModal';
import CoinIcon from '../../assets/coin-icon.svg';
import DefaultProfile from '../../assets/default-profile.svg';
import DecorationCharacter from '../../components/Decorations/Character';
import { ShopContainer, ContentContainer, ItemContainer, ItemCard, ItemImgWrapper, ItemImg, ItemInfo, InfoWrapper, ItemName, InfoDescription, ItemPrice, Button } from './style';

const Shop = () => {
  const DecorationItems = [
    {
      name: '초록 거북이',
      description: '귀여운 거북이가 엉금엉금 기어오릅니다.',
      price: '1000',
      type: 'GreenTurtle',
    },
    {
      name: '분홍 거북이',
      description: '귀여운 거북이가 엉금엉금 기어오릅니다.',
      price: '1000',
      type: 'PinkTurtle',
    },
    {
      name: '파랑 파도',
      description: '바다로 떠나고 싶어지네요.',
      price: '1500',
      type: 'Wave',
    },
  ]

  const [isOpenedModal, setIsOpenedModal] = React.useState(false);

  function openModal() {
    setIsOpenedModal(true);
  }

  function closeModal() {
    setIsOpenedModal(false);
  }

  return (
    <ShopContainer>
      <TopBar />
      <BlackScreen isOpen={isOpenedModal} />
      <ContentContainer>
        <ItemContainer>
          {DecorationItems.map((item, index) => (
            <ItemCard key={index}>
              <ItemImgWrapper>
                <DecorationCharacter type={item.type} size={"small"} />
                <ItemImg src={DefaultProfile} />
              </ItemImgWrapper>
              <ItemInfo>
                <InfoWrapper>
                  <ItemName>{item.name}</ItemName>
                  <InfoDescription>{item.description}</InfoDescription>
                </InfoWrapper>
                <ItemPrice>
                  <img src={CoinIcon} />
                  {item.price}
                </ItemPrice>
              </ItemInfo>
              <Button onClick={openModal}>
                구매
              </Button>
            </ItemCard>
          ))}
        </ItemContainer>
        <AlertModal
          isOpen={isOpenedModal}
          description={"구매 문의는 디스코드로 연락해주세요 😊"}
          closeModal={closeModal}
        />
      </ContentContainer>
    </ShopContainer>
  );
}

export default Shop;
