"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Result from "./ResultComponent";
import { DictionaryAPI } from "./type";
import ResultComponent from "./ResultComponent";


export default function Home() {
  const [apiData, setApiData] = useState<DictionaryAPI | null>(null);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/change")
      .then((res) => res.json())
      .then((data) => {
        setApiData({
          word: String(data[0].word),
          phonetic: String(data[0].phonetic),
          phonetics: data[0].phonetics.map(function (phonetics: any) {
            return {
              text: phonetics.text,
              audio: phonetics.audio,
            };
          }),
          meanings: data[0].meanings.map(function (meanings: any) {
            return {
              partOfSpeech: meanings.partOfSpeech,
              synonyms: meanings.synonyms,
              antonyms: meanings.antonyms,
              definitions: meanings.definitions.map(function (definitions: any) {
                return {
                  definition: definitions.definition,
                  example: definitions.example,
                };
              }),
            };
          }),
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ResultComponent dictionaryAPI={apiData} />
    </div>
  );
}

