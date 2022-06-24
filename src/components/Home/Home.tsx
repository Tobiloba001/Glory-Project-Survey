import React from "react";
import { AppButton } from "../../UI/button/Buttons";
import homeStyles from "./Home.module.scss";
import { useDispatch } from "react-redux";
import { setSurveyStep, SurveyStep } from "../../store/Slice/Step/slice";
const Home = () => {
  const dispatch = useDispatch();
  const onStart = () => {
    dispatch(setSurveyStep(SurveyStep.user));
  };
  return (
    <>
      <h1 className={homeStyles.homeContainer__header}>
        Welcome to our Survey.
      </h1>
      <p className={homeStyles.homeContainer__body}>
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
      <div className={homeStyles.homeContainer__button}>
        <AppButton
          value='START THE SURVEY'
          onClick={onStart}
          hasIcon={"true"}
          width='400px'
          height='60px' lineHeight={""}        />
      </div>
    </>
  );
};

export default Home;
