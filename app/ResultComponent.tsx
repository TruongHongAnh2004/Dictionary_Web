import React from "react";
import { DictionaryAPI } from "./type";
import PronounceComponent from "./PronounceComponent";
import PartOfSpeechComponent from "./PartsOfSpeechComponent";

function ResultComponent(props: { dictionaryAPI: DictionaryAPI | null }) {
  return (
    <div className="w-lg text-lg leading-loose my-20 ">
      <div className="flex flex-row gap-2 items-end ">
        <h1 className="text-cyan-900 text-4xl font-bold leading-none">
          {props.dictionaryAPI?.word}
        </h1>
        <span className="leading-none">{props.dictionaryAPI?.meanings[0].partOfSpeech}</span>
      </div>

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
