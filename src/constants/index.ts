export type QuestionPoints = {
  name?: string;
  value: number;
}

type QuestionType = {
  id?: number;
  question?: string;
  optionType?: string;
  options?: QuestionPoints[];
  selectedAnswer?: string;
};

const Questions: QuestionType[] = [
  {
    id: 1,
    question: "How often do you visit this website?",
    optionType :"option",
    options: [{name:"Often", value:5} , {name:"Rarely", value:3},{name:"Never", value:0}],
    selectedAnswer: "",
  },
  {
    id: 2,
    question: "Please select at least one option",
    optionType :"checkbox",
    options:[{name:"Option 1", value:2} , {name:"Option 2", value:2},{name:"Option 3", value:0}],
    selectedAnswer: "",
  },
  {
    id: 3,
    question: "Where are you from?",
    optionType :"select",
    options:[{name:"Germany", value:3} , {name:"Sweden", value:5},{name:"Italy", value:5},{name:"Spain",value:3}],
    selectedAnswer: "",
  },
];

export default Questions;
