import React from 'react';
import HeroSection from '../../MainPage';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import ResumePage from '../../ResumePage';
function Resume() {
  return (
    <>
      <ResumePage {...homeObjOne} />
      
    </>
  );
}

export default Resume;
