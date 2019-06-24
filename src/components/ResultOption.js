import React from "react";
import Interweave from "interweave";
var resultOptions = [
  {
    slug: "Only",
    full: "Only Time",
    song:
      "Who can say if your love grows<br/>As your heart chose<br/>Only time.",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun.",
    realms: "The heart and the sky."
  },
  {
    slug: "Caribbean",
    full: "Caribbean Blue",
    song:
      "If every man says all he can<br/>If every man is true<br/>Do I believe the sky above<br/>Is Caribbean blue?",
    realms: "The mind and the sea",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Orinoco",
    full: "Orinoco Flow (Sail Away)",
    song:
      "Let me sail, let me sail, let me crash upon your shore.<br/>Let me reach, let me beach far beyond the Yellow Sea<br/>De-da, da-da-de.",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun.",
    realms: "The body and the sea."
  },
  {
    slug: "Echoes",
    full: "Echoes in Rain",
    song:
      "Night comes again<br/>Everything flows<br/>Here comes another new day.",
    description:
      "You are patient. You tend to welcome newness with calm and serenity. You risk passivity and “going with flow” even if you don’t like where it’s taking you. You seek seeks tranquility. You find delight in the daily; what is familiar, here now, and expected rhythms.",
    realms: "The heart and the field."
  },
  {
    slug: "Storms",
    full: "Storms in Africa (Part II)",
    song:
      "Black earth and ivory<br/>Far from your sun<br/>Clouds now close over me.",
    realms: "The mind and the sky.",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "If",
    full: "If I Could Be Where You Are",
    song:
      "If I could be close beside you<br/>If I could be where you are<br/>If I could reach out and touch you…",
    realms: "The heart and the sea.",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Wild",
    full: "Wild Child",
    song:
      "You don’t need a reason<br/>Let the rain go on and on<br/>What a day…",
    realms: "The body and the sky",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "Anywhere",
    full: "Anywhere Is",
    song:
      "I wonder if the stars sign<br/>The life that is to be mine<br/>And would they let their light shine<br/>Enough for me to follow.",
    realms: "The body and the field",
    description:
      "It looks so good, I might as well not stop. Clouds are free. They just float around the sky all day and have fun. Let your heart take you to wherever you want to be. Mountains are so simple, they're hard. Anyone can paint.Work on one thing at a time. Don't get carried away - we have plenty of time. There isn't a rule. You just practice and find out which way works best for you. Imagination is the key to painting. All you have to learn here is how to have fun."
  },
  {
    slug: "May",
    full: "May It Be",
    song:
      "Believe and you will find your way<br/>Mornië alantië<br/>A promise lives within you now.",
    realms: "The mind and the field.",
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
          <p className="card-text">
            <i>
              <Interweave content={result.song} />
            </i>
          </p>
          <p className="card-text">{result.description}</p>
          <p className="card-text">
            <b>Realms</b>: <span>{result.realms}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultOption;
