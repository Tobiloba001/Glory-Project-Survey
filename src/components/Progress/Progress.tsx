import React from "react";
import "./Progress.scss";
const ProgressBar = ({ questionNumber }: { questionNumber: number }) => (
  <div className='progressBar'>
    {questionNumber === 1 ? (
      <section></section>
    ) : questionNumber === 2 ? (
      <section></section>
    ) : questionNumber === 3 ? (
      <section></section>
    ) : (
      ""
    )}
  </div>
);

export default ProgressBar;
