import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionPoints } from "../../../constants";
interface IAnswer {
  answers: QuestionPoints[];
  question: number;
}
const initialState: IAnswer = {
  answers: [
    {
      value: 0,
      name: "",
    },
  ],
  question:1
};
const SurveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setSurveyAnswer: (state, action: PayloadAction<QuestionPoints>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      const arr = state.answers;
      const isExists = state.answers.find(
        (x) => x.name === action.payload.name
      );
      if (!isExists) {
        state.answers.push(action.payload);
      } else {
        const index = arr.findIndex((x) => x.name === isExists?.name);
        arr.splice(index, 0);
        arr.push(action.payload);
        state.answers = arr;
      }
      return state;
    },
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.question=action.payload;
      return state;
    }
  },
});

export const { setSurveyAnswer,setCurrentQuestion } = SurveySlice.actions;
export default SurveySlice.reducer;
