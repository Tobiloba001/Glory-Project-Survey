import React, { useState } from "react";
import { AppButton, BackButton } from "../../utils/button/Buttons";
import ProgressBar from "../Progress/Progress";
import { IQuestion, QuestionPoints } from "../Survey/Survey";
import "./Questions.scss";

const SurveyQuestions = ({
  question,
  onNext,
  onBack,
  onFinish,
}: {
  question: IQuestion;
  onNext: (selectedOption: string) => void;
  onBack: () => void;
  onFinish: () => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const [selectedName, setSelectedName] = useState<string>();
  function Select({ optionsArr }: { optionsArr?: QuestionPoints[] }) {
    return (
      <section className='questionsContainer__options'>
        <select onChange={(e) => setSelectedOption(e.target.value)}>
          {optionsArr?.map((item: QuestionPoints, index: number) => {
            return (
              <option
                key={item.value + index}
                id={item.name}
                selected={Number(selectedOption) === item.value ? true : false}
                value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </section>
    );
  }

  function Options({ optionsArr }: { optionsArr?: QuestionPoints[] }) {
    return (
      <section className='questionsContainer__options'>
        {optionsArr?.map((item: QuestionPoints, index: number) => {
          return (
            <section key={index}>
              <input
                type='radio'
                id={item.name}
                name='select'
                value={item.value}
                checked={Number(selectedOption) === item.value ? true : false}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </section>
          );
        })}
      </section>
    );
  }
  function CheckBox({ optionsArr }: { optionsArr?: QuestionPoints[] }) {
    return (
      <section className='questionsContainer__options'>
        {optionsArr?.map((item: QuestionPoints, index: number) => {
          return (
            <section key={index + item.value}>
              <input
                type='checkbox'
                name={item.name}
                id={item.name}
                checked={selectedName===item.name ? true : false}
                value={item.value}
                onClick={()=>setSelectedName(item.name)}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </section>
          );
        })}
      </section>
    );
  }
  return (
    <>
      <section>
        <p className='questionsContainer__header'>Question {question.id}</p>
        <p className='questionsContainer__subHeader'>{question.question}</p>
        {question.optionType === "select" && (
          <Select optionsArr={question.options} />
        )}
        {question.optionType === "option" && (
          <Options optionsArr={question.options} />
        )}
        {question.optionType === "checkbox" && (
          <CheckBox optionsArr={question.options} />
        )}

        <section className='questionsContainer__button'>
          <AppButton
            value='Next'
            // @ts-ignore: Object is possibly 'null'.
            onClick={() => onNext(selectedOption)}
            width={"245px"}
            height={"66px"}
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
        </section>
      </section>

      <ProgressBar questionNumber={question?.id}/>
    </>
  );
};

export default SurveyQuestions;
