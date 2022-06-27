import React, { useState } from "react";
import { AppButton, BackButton } from "../../utils/button/Buttons";
import "./User.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/Slice/User/slice";
import { SurveyStep, setSurveyStep } from "../../store/Slice/Step/slice";
const User = () => {
  const dispatch = useDispatch();
  const [surveyUser, setSurveyUser] = useState<string>("");
  const [error, setError] = useState<string>("");
  const onNext =  () => {
    if (!surveyUser) {
      setError("Please enter a valid name");
      return;
    }
    setError("");

    dispatchNext(dispatch);
  };

  const dispatchNext = (dispatch) => {
    dispatch(setUser(surveyUser));
    dispatch(setSurveyStep(SurveyStep.questions));
  };
  

  const onBack =  () => {
    dispatchBack(dispatch);
  };

  const dispatchBack = (dispatch) => {
    dispatch(setUser(""));
    dispatch(setSurveyStep(SurveyStep.intro));
  };
  return (
    <center>
      <p className='userContainer__header'>Who are you?</p>
      <h3 className='userContainer__subHeader'>Please enter your name.</h3>
      <input
        type='text'
        onChange={(e) => setSurveyUser(e.target.value)}
        className='userContainer__input'
        placeholder='John Doe'
      />
      {error && <label className='userContainer__error'>{error}</label>}
      <div className='userContainer__button'>
        <AppButton
          height='66px'
          width='245px'
          value='NEXT'
          onClick={onNext}
          lineHeight={""}
          hasIcon={"true"}
        />

        <BackButton
          value='Back'
          onClick={onBack}
          width={"10px"}
          height={"40px"}
          lineHeight={"40px"}
        />
      </div>
    </center>
  );
};

export default User;
