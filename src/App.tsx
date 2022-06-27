import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";
import { SurveyStep } from "./store/Slice/Step/slice";
import { RootState } from "./store/store";
import User from "./components/User/User";
import Survey from "./components/Survey/Survey";
import Result from "./components/Result/Result";
function App() {
  document.title = "Survey App";
  const currentSurveyStep = useSelector((state: RootState) => state.step.step);
  const appUser = useSelector((state: RootState) => state.user.user);
  const currentQuestionNumber = useSelector(
    (state: RootState) => state.survey.question
  );
  console.log(currentQuestionNumber);
  return (
    <>
      {currentSurveyStep === SurveyStep.questions && (
        <div className='user'>SURVEY FOR:{appUser}</div>
      )}

      <div className='App'>
        {currentSurveyStep === SurveyStep.intro && <Home />}
        {currentSurveyStep === SurveyStep.user && <User />}
        {currentSurveyStep === SurveyStep.questions && appUser && <Survey />}
        {currentSurveyStep === SurveyStep.result && appUser && <Result />}
      </div> 

     
    </>
  );
}

export default App;
