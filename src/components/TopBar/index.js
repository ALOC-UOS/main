import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBarContainer, TopBarItem } from './style';

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

const TopBar = () => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if( path === '/test/' || path === '/test') {
      setSelectedItem('/');
    } else if (path === '/test/problem/' || path === '/test/problem') {
      setSelectedItem('/problem');
    } else if (path === '/test/member/' || path === '/test/member') {
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

  const navigate = useNavigate();
  function goRoute(route) {
    if (route === selectedItem) return;
    navigate(route);
  };

  return (
    <TopBarContainer isScroll={isScroll}>
      {TopBarItems.map((item, index) => (
        <TopBarItem
          key={index}
          selected={selectedItem === item.route}
          onClick={() => goRoute(item.route)}
        >
          {item.name}
        </TopBarItem>
      ))}
    </TopBarContainer>
  );
}

export default TopBar;
