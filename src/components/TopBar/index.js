import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBarContainer, TopBarLeft, TopBarItem, TopBarButton } from './style';

const TopBarItems = [
  {
    name: '메인 화면',
    route: '/',
  },
  {
    name: '문제 목록',
    route: '/problem',
  },
  {
    name: '구성원',
    route: '/member',
  },
];

const TopBar = ({ active }) => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if( path === '/main/' || path === '/main') {
      setSelectedItem('/');
    } else if (path === '/main/problem/' || path === '/main/problem') {
      setSelectedItem('/problem');
    } else if (path === '/main/member/' || path === '/main/member') {
      setSelectedItem('/member');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const checkTodaySolvedProblem = () => {
    let url = 'https://www.iflab.run/api/check/problem/today';
    axios.get(url)
    window.location.reload();
  }

  const navigate = useNavigate();
  function goRoute(route) {
    if (route === selectedItem) return;
    navigate(route);
  };

  return (
    <TopBarContainer isScroll={isScroll}>
      <TopBarLeft>
        {TopBarItems.map((item, index) => (
          <TopBarItem
            key={index}
            selected={selectedItem === item.route}
            onClick={() => goRoute(item.route)}
          >
            {item.name}
          </TopBarItem>
        ))}
      </TopBarLeft>
      <TopBarButton
        active={active}
        onClick={() => checkTodaySolvedProblem()}
      >
        문제 풀었어요!
      </TopBarButton>
    </TopBarContainer>
  );
}

export default TopBar;
