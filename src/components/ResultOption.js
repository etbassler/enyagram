import React from "react";

var resultOptions = [
  {
    slug: "Only",
    full: "Only Time",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Caribbean",
    full: "Caribbean Blue",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Orinoco",
    full: "Orinoco Flow (Sail Away)",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Echoes",
    full: "Echoes in Rain",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Storms",
    full: "Storms in Africa (Part II)",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "If",
    full: "If I Could Be Where You Are",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Wild",
    full: "Wild Child",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Anywhere",
    full: "Anywhere Is",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "May",
    full: "May It Be",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  }
];

function ResultOption(props) {
  const result = resultOptions.find(item => item.slug === props.option);
  return (
    <div className="col-sm-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{result.full}</h3>

          <p className="card-text">{result.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultOption;
