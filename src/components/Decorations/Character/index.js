import React, { useState, useEffect } from 'react';
import DecorationItem from './style';
import Turtle1 from '../../../assets/turtle-1.svg';
import Turtle2 from '../../../assets/turtle-2.svg';
import Wave1 from '../../../assets/wave-1.svg';
import Wave2 from '../../../assets/wave-2.svg';
import Wave3 from '../../../assets/wave-3.svg';

const Character = ({ type, isShow }) => {
  const [Turtle, setTurtle] = useState(Turtle1);
  const [Wave, setWave] = useState(Wave1);

  useEffect(() => {
    setTimeout(() => {
      gifTurtle();
    }, 500);
  }, [Turtle]);

  useEffect(() => {
    setTimeout(() => {
      gifWave();
    }, 300);
  }, [Wave]);

  function gifTurtle() {
    if (Turtle === Turtle1) {
      setTurtle(Turtle2);
    } else {
      setTurtle(Turtle1);
    }
  }

  function gifWave() {
    if (Wave == Wave1) {
      setWave(Wave2);
    } else if (Wave == Wave2) {
      setWave(Wave3);
    } else {
      setWave(Wave1);
    }
  }

  return (
    <>
      <DecorationItem
        src={Turtle}
        width={100}
        height={100}
        top={-48}
        left={64}
        show={isShow} />
      <DecorationItem
        src={Wave}
        width={134}
        height={49}
        top={66}
        left={0}
        show={isShow} />
    </>
  );

};

export default Character;
