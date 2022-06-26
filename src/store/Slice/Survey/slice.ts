import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionPoints } from "../../../constants/Questions";
interface IAnswer {
  answers: QuestionPoints[];
  question: number;
}
const initialState: IAnswer = {
  answers: [],
  question:0
};
const SurveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setSurveyAnswer: (state, action: PayloadAction<QuestionPoints>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      debugger;
      const arr = [...state.answers];
      const isExists = arr.find(
        (x) => x.name === action.payload.name
      );
      if (!isExists) {
        arr.push(action.payload);
        state.answers = arr;
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
