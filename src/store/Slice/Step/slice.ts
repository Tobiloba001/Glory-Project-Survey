import { createSlice } from "@reduxjs/toolkit";

export const enum SurveyStep{
    intro,
    user,
    questions,
    result
}
interface ISurveyStep{
    step:SurveyStep
};
const initialState: ISurveyStep = {
    step:SurveyStep.intro
}

const surveyStepSlice = createSlice({
    name:'survey',
    initialState,
    reducers: {
        setSurveyStep: (state, action) => {
            state.step=action.payload
        }
    }
})

export const { setSurveyStep } = surveyStepSlice.actions;
export default surveyStepSlice.reducer;