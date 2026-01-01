import DefinitionsComponent from "./DefinitionsComponent";
import { Meanings } from "./type";

function PartOfSpeechComponent(props: { meanings: Meanings }) {
  return (
    <div>
      <h2 className="border-solid bg-yellow-500 font-bold px-5 py-1 mb-3 text-2xl">{props.meanings.partOfSpeech}</h2>

      <div>
        {props.meanings.definitions.map((mean, i) => (
          <DefinitionsComponent key={i} definitions={mean} num={i} />
        ))}
      </div>

      {props.meanings.synonyms.length > 0 ? (
        <div>
          <h3 className="text-green-900 font-bold">Synonyms:</h3>
          <ul className="list-disc px-4">
            {props.meanings.synonyms.map((word, i) => (
              <li key={i}>{word}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {props.meanings.antonyms.length > 0 ? (
        <div>
          <h3 className="text-red-800 font-bold">Antonyms:</h3>
          <ul className="list-disc px-4">
            {props.meanings.antonyms.map((word1, i) => (
              <li key={i}>{word1}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default PartOfSpeechComponent;
