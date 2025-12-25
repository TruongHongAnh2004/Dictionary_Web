import React from "react";
import { DictionaryAPI } from "./type";
import PronounceComponent from "./PronounceComponent";
import PartOfSpeechComponent from "./PartsOfSpeechComponent";

function ResultComponent(props: { dictionaryAPI: DictionaryAPI | null }) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{props.dictionaryAPI?.word}</h1>

      <div>
        {props.dictionaryAPI?.phonetics.map((usuk, i) => (
          <PronounceComponent key={i} phonetics={usuk} />
        ))}
      </div>

      <div> 
        {props.dictionaryAPI?.meanings.map((part, i) => (
          <PartOfSpeechComponent key={i} meanings={part} />
        ))}
      </div>

    </div>
  );
}
export default ResultComponent;
