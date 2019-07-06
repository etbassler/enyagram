import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Header />
    <div className="d-flex flex-column align-items-center">
      <p className="mt-4">
        There are three approved methods to learn one’s Enyagram. They are not
        equally effective, so they are listed from most to least recommended:
      </p>
      <ol className="home-list">
        <li>
          Stand upon the cliffs of Ireland overlooking the sea. Whisper a secret
          to the wind with your eyes upon the horizon. Turn back to the land,
          and grasp the first stone or shell you lay eyes upon. Listen to the
          secret it tells back to you. Then you will know.
        </li>
        <li>
          Listen to the entire discography of Enya. The moon, sun, and stars
          will place one song in your heart. This is likely your Enyagram.
        </li>
        <li>Take the Enyagram quiz.</li>
      </ol>
      <Link
        className="btn btn-primary p-4 home-button"
        to={process.env.PUBLIC_URL + "/quiz"}
      >
        About the Enyagram
      </Link>
    </div>
  </>
);
export default Home;
