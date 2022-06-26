import React from "react";
import "./Progress.scss";
const ProgressBar = ({ questionNumber }: { questionNumber: number }) => (
  <div className='progressBar'>
    {/* {questionNumber === 1 ? (
      <section></section>
    ) : questionNumber === 2 ? (
      <section></section>
    ) : questionNumber === 3 ? (
      <section></section>
    ) : (
      ""
    )} */}
        <progress  value={questionNumber===1?"33.3":questionNumber===2?"66.6":questionNumber===3?"100":"0"}></progress>

  </div>
);

export default ProgressBar;
