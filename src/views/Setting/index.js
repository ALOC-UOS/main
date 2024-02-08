import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SettingContainer, ButtonWrap, InputBox, InputList, InputItem, SelectedText, ArrowIcon } from './style';
import InputWrap from '../../components/Input';
import Button from '../../components/Buttons';
import InputArrowIcon from '../../assets/input-arrow-icon.svg';

const algorithmList = [
  {
    algo_id: 124,
    algo_name: '수학',
  },
  {
    algo_id: 102,
    algo_name: '구현',
  },
  {
    algo_id: 25,
    algo_name: '다이나믹 프로그래밍(DP)',
  },
  {
    algo_id: 175,
    algo_name: '자료 구조',
  },
  {
    algo_id: 7,
    algo_name: '그래프 이론',
  },
  {
    algo_id: 33,
    algo_name: '그리디 알고리즘',
  },
  {
    algo_id: 158,
    algo_name: '문자열',
  },
  {
    algo_id: 125,
    algo_name: '브루트포스 알고리즘',
  },
  {
    algo_id: 11,
    algo_name: '그래프 탐색',
  },
  {
    algo_id: 97,
    algo_name: '정렬',
  },
  {
    algo_id: 100,
    algo_name: '기하학',
  },
  {
    algo_id: 95,
    algo_name: '정수론',
  },
  {
    algo_id: 120,
    algo_name: '트리',
  },
  {
    algo_id: 109,
    algo_name: '애드 혹',
  },
  {
    algo_id: 65,
    algo_name: '세그먼트 트리',
  },
  {
    algo_id: 12,
    algo_name: '이분 탐색',
  },
  {
    algo_id: 121,
    algo_name: '사칙연산',
  },
  {
    algo_id: 141,
    algo_name: '시뮬레이션',
  },
  {
    algo_id: 126,
    algo_name: '너비 우선 탐색',
  },
  {
    algo_id: 127,
    algo_name: '깊이 우선 탐색',
  },
];

const Setting = () => {
  const [originalAlgorithmId, setOriginalAlgorithmId] = useState('');
  const [algorithmId, setAlgorithmId] = useState('');
  const [algorithmName, setAlgorithmName] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpenList, setOpenList] = useState('');

  useEffect(() => {
    const url = 'https://www.iflab.run/api/algorithm';
    axios.get(url)
      .then((response) => {
        setOriginalAlgorithmId(response.data);
        setAlgorithmName(algorithmList.find((item) => item.algo_id === response.data).algo_name);
      })
      .catch((error) => {
        console.log(error);
      }
    );
  }, []);

  const openList = (id) => {
    if(id === isOpenList) {
      setOpenList('');
      return;
    }
    setOpenList(id);
  }

  const selectAlgorithm = (algorithmName) => {
    setAlgorithmId(algorithmList.find((item) => item.algo_name === algorithmName).algo_id);
    setAlgorithmName(algorithmName);
    setOpenList('');
    setIsDisabled(false);
  }

  const clickInitButton = () => {
    setIsDisabled(true);
    setAlgorithmId(originalAlgorithmId);
    setAlgorithmName(algorithmList.find((item) => item.algo_id === originalAlgorithmId).algo_name);
  }

  const clickSaveButton = () => {
    const url = 'https://www.iflab.run/api/algorithm';
    axios.patch(url, {
      id: algorithmId,
      name: algorithmName,
    })
    setIsDisabled(true);
    setOriginalAlgorithmId(algorithmId);
    setAlgorithmId('');
  }

  return (
    <SettingContainer>
      <InputWrap label={'알고리즘'}>
        <InputBox onClick={() => openList('algorithm')}>
          <SelectedText>{algorithmName}</SelectedText>
          <ArrowIcon src={InputArrowIcon} selected={isOpenList === 'algorithm'} />
        </InputBox>
        <InputList
          isOpen={isOpenList === 'algorithm'}
          ItemNumber={algorithmList.length}
        >
          {algorithmList.map((ListItem) => (
            <InputItem
              key={ListItem.list_id}
              onClick={() => selectAlgorithm(ListItem.algo_name)}
              selected={ListItem.algo_name === algorithmName}
            >
              {ListItem.algo_name}
            </InputItem>
          ))}
        </InputList>
      </InputWrap>
      <ButtonWrap>
        <Button onClick={clickInitButton}>초기화</Button>
        <Button
          color={"blue"}
          type={isDisabled ? "disabled" : "active"}
          onClick={clickSaveButton}
        >
          저장
        </Button>
      </ButtonWrap>
    </SettingContainer>
  );
};

export default Setting;
