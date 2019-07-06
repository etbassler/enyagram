import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const About = () => (
  <>
    <Header />
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-4 mb-4">About the Enyagram</h2>
      <p>
        Over many centuries, the ancient Celts established profound wisdom
        surrounding the self. While the traditions and teachings of ancient
        Greeks and Eastern philosophies dominate the modern global psyche of
        wisdom, the Celts held some of the most meaningful keys to knowing
        oneself.
      </p>

      <p>
        They contended that each individual favored one aspect each of two
        three-fold realms: those of sea, sky, or field and those of mind, heart,
        or body. An individual&rsquo;s internal harmonies of these realms reveal
        deep symbolic truths about oneself.
      </p>

      <p>
        However, for millennia, this system was lost&mdash;or hidden&mdash;from
        the world. Only in 1987 did this ancient wisdom begin to surface.
      </p>

      <p>
        Encoded in the songs of Enya is the lost wisdom of the Celts. Whether by
        her intent, or some providential fortune, this musician has offered the
        gift of this ancient way once more.&nbsp;
      </p>

      <p>
        The Enyagram uncovers, organizes, and elucidates what is hidden in the
        songs of Enya. By using 9 songs of Enya, the Enyagram offers a
        personality profile that will reveal one&rsquo;s realms and the inner
        workings of their very self.
      </p>
      <Link
        to={process.env.PUBLIC_URL + "/"}
        className="btn btn-primary p-4 home-button"
      >
        Take the Quiz
      </Link>
    </div>
  </>
);
export default About;
