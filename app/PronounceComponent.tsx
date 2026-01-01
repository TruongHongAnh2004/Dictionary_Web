import React, { useRef } from "react";
import { AiFillSound } from "react-icons/ai";

import { Phonetics } from "./type";

function PronounceComponent(props: { phonetics: Phonetics }) {
  const audioRef = useRef(null);

  const handleClick = () => {
    playAudio();
  };

  const playAudio = () => {
    // Access the DOM element using .current and call the play method
    if (audioRef.current == null) return;

    audioRef.current.play().catch((error) => {
      // Handle play() promise rejection (e.g., autoplay policies)
      console.error("Audio playback failed:", error);
    });
  };

  return (
    <div className="flex flex-row gap-2 items-end my-2">
      <button className="hover:bg-sky-700" onClick={handleClick}>
        <AiFillSound />
      </button>
      <p className="leading-none">{props.phonetics.text}</p>

      <audio ref={audioRef} src={props.phonetics.audio}></audio>
    </div>
  );
}

export default PronounceComponent;