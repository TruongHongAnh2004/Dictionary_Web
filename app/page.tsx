"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Result from "./ResultComponent";
import { DictionaryAPI } from "./type";
import ResultComponent from "./ResultComponent";
import { text } from "stream/consumers";
import { useRouter } from "next/navigation";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [buttonOk, setButtonOk] = useState(false);
  const [apiData, setApiData] = useState<DictionaryAPI | null>(null);
  const router = useRouter();

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleButton = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + inputText)
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
              definitions: meanings.definitions.map(function (
                definitions: any
              ) {
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
  };
  return (
    <div>
      <div className="flex justify-center bg-blue-900 p-3 h-18">
        <label className="bg-amber-300 w-24 flex justify-center items-center font-semibold">
          English:
        </label>
        <input
          className=" bg-white w-96 pl-5"
          type="text"
          value={inputText}
          placeholder="Search English"
          onChange={handleChange}
        />
        <button
          className="border-x-1 bg-white hover:bg-gray-400 w-10 flex justify-center items-center"
          type="button"
          onClick={handleButton}
        >
          <AiOutlineFileSearch className="w-7 h-16 text-cyan-900" />
        </button>
      </div>

      <div className="flex justify-center-safe ">
        <ResultComponent dictionaryAPI={apiData} />
      </div>
    </div>
  );
}
