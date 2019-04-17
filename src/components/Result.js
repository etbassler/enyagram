import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import ResultOption from "./ResultOption";

function many() {
  return (
    <div>
      Your Enyagram is as a kite blown in two directions. To determine which
      wind to follow, follow these steps:{" "}
      <ol>
        <li>Read the descriptions and choose the best fit.</li>
        <li>
          Listen to each song and choose the one that resonates on a spiritual
          level.
        </li>
        <li>Listen to what secrets the wind might tell and and trust her.</li>
      </ol>
    </div>
  );
}

function Result(props) {
  const result = props.quizResult;

  return (
    <CSSTransitionGroup
      className="result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div class="row pt-4 justify-content-center">
        <div class="col-sm-12 mb-2">
          {result.length > 1 ? many() : "Your Enyagram results:"}
        </div>
        {result.map((option, i) => (
          <ResultOption key={i} option={option} />
        ))}
      </div>
    </CSSTransitionGroup>
  );
}

export default Result;
