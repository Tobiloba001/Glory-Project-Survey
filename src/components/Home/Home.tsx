import React from "react";
import { AppButton } from "../../utils/button/Buttons";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { setSurveyStep, SurveyStep } from "../../store/Slice/Step/slice";
const Home = () => {
  const dispatch = useDispatch();
  const onStart = () => {
    dispatch(setSurveyStep(SurveyStep.user));
  };
  return (
    <>
      <h1 className='homeContainer__header'>Welcome to our Survey.</h1>
      <center>
      <p className='homeContainer__body'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
        </p>
        <div className='homeContainer__button'>
        <AppButton
          value='START THE SURVEY'
          onClick={onStart}
          hasIcon={"true"}
          width={"371px"}
          height='66px'
          lineHeight={""}
        />
      </div>
      </center>
      
      
    </>
  );
};

export default Home;
