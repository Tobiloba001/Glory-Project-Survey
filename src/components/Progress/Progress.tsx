import React from "react";
import "./Progress.scss";

function setWithByQuestionNumber(qnumber: number) {
  debugger;
  if (qnumber ===1) {
    return {
      width: "33.3%",
      backgroundColor: "#fff",
    };
  }
  if (qnumber === 2) {
    return {
      width: "66.3%",
      backgroundColor: "#fff",
    };
  }
  if (qnumber === 3) {
    return {
      width: "95%",
      backgroundColor: "#fff",
    };
  }
}
const ProgressBar = ({ questionNumber }: { questionNumber: number }) => (
  <div className='progressBar'>
    <label className="progressBar__footer" style={questionNumber===3?{marginTop:'-20px'}:{}}>Question {questionNumber } of 3</label>
    <section
      style={
        questionNumber === 0
          ? setWithByQuestionNumber(questionNumber)
          : questionNumber === 1
          ? setWithByQuestionNumber(questionNumber)
          : questionNumber === 2
          ? setWithByQuestionNumber(questionNumber)
          : {}
      }>
      {" "}
      .
    </section>
  </div>
);

export default ProgressBar;
