import React from "react";
import { Phonetics } from "./type";

function PronounceComponent(props: { phonetics: Phonetics }) {
  return (
    <div>
      <p>{props.phonetics.text}</p>
      <audio src={props.phonetics.audio} controls></audio>
    </div>
  );
}

export default PronounceComponent;
