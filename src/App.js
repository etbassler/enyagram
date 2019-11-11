import React, { Component } from "react";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        May: 0,
        Echoes: 0,
        Storms: 0,
        Only: 0,
        Caribbean: 0,
        If: 0,
        Wild: 0,
        Anywhere: 0,
        Orinoco: 0
      },
      result: "",
      wings: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(
        () => this.setResults(this.getResults(), this.getWings()),
        300
      );
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }
  getWings() {
    const wingsCount = this.state.answersCount;
    const wingsCountKeys = Object.keys(wingsCount);
    const wingsCountValues = wingsCountKeys.map(key => wingsCount[key]);
    const maxWingsCount = Math.max.apply(null, wingsCountValues);

    wingsCountValues.splice(wingsCountValues.indexOf(maxWingsCount), 1); // remove max from the array

    const secondMax = Math.max.apply(null, wingsCountValues); // get the 2nd max
    const wings = wingsCountKeys.filter(key => wingsCount[key] === secondMax);
    return wings.slice(0, 1);
  }

  setResults(result, wings) {
    console.log(result, wings);
    if (result.length >= 1) {
      this.setState({ result: result });
      this.setState({ wings: wings });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.getResults()} quizWings={this.getWings()} />
    );
  }

  render() {
    return (
      <div className="App">
        <Header />

        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
