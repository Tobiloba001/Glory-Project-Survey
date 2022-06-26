import React from "react";
import "./Progress.scss";

function setWithByQuestionNumber(qnumber: number) {
  debugger;
  if (qnumber === 0) {
    return {
      width: "33.3%",
      backgroundColor: "#fff",
    };
  }
  if (qnumber === 1) {
    return {
      width: "66.3%",
      backgroundColor: "#fff",
    };
  }
  if (qnumber === 2) {
    return {
      width: "95%",
      marginLeft: '-190px',
      marginTop:'-20px',
      backgroundColor: "#fff",
    };
  }
}
const ProgressBar = ({ questionNumber }: { questionNumber: number }) => (
  <div className='progressBar'>
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
