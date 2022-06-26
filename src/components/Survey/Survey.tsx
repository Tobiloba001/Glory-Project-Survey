import React, { useState } from "react";
import Questions from "../../constants/Questions";
import SurveyQuestions from "../Question/Questions";
import { useDispatch } from "react-redux";
import { SurveyStep, setSurveyStep} from "../../store/Slice/Step/slice";
import {setSurveyAnswer,setCurrentQuestion } from '../../store/Slice/Survey/slice'

export type QuestionPoints = {
  name?: string;
  value: number;
}
export interface IQuestion {
  id?: number;
  question?: string;
  optionType?: string | undefined;
  options: QuestionPoints[] | undefined;
  selectedOption?: string;
}
export function filterQuestionsById(questionNumber: number): IQuestion {
  const getQuestion = Questions.find((x) => x.id === questionNumber);
  return {
    id: getQuestion?.id,
    question: getQuestion?.question,
    optionType: getQuestion?.optionType,
    options: getQuestion?.options,
    selectedOption: getQuestion?.selectedAnswer,
  };
}
const Survey = () => {
  const dispatch = useDispatch();
  const [questionNumber, setQuestionNumber] = useState<number>(1);


  const handleNext =  (selectedOption: string) => {
    const getCurrentQuestion = filterQuestionsById(questionNumber);
    const answer: QuestionPoints = {
      value: Number(selectedOption),
      // @ts-ignore: Object is possibly 'null'.
      name: getCurrentQuestion?.options.find(
        (x) => x.value === Number(selectedOption)
      )?.name,
    };
    if (questionNumber === Questions.length) {
      dispatch(setSurveyAnswer(answer));
      handleFinish();
      return;
    }
    if (questionNumber < Questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
    dispatchNext(answer, questionNumber, dispatch);
  };

  const dispatchNext = (
    answer: QuestionPoints,
    questionNumber: number,
    dispatch: any
  ) => {
    dispatch(setSurveyAnswer(answer));
    dispatch(setCurrentQuestion(questionNumber));

  };

  const handleBack = () => {
    if (questionNumber === 1) {
      dispatch(setSurveyStep(SurveyStep.user));
    }
    setQuestionNumber(questionNumber - 1);
  };

  const handleFinish = () => {
    dispatch(setSurveyStep(SurveyStep.result))
  }
  return (
    <SurveyQuestions
      question={filterQuestionsById(questionNumber)}
      onNext={handleNext}
      onBack={handleBack}
      onFinish={handleFinish}
    />
  );
};

export default Survey;
