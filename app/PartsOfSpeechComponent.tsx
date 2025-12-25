import DefinitionsComponent from "./DefinitionsComponent";
import { Meanings } from "./type";

function PartOfSpeechComponent(props: { meanings: Meanings }) {
  return (
    <div>
      <h2>{props.meanings.partOfSpeech}</h2>

      <div>
        {props.meanings.definitions.map((mean,i) => (
            <DefinitionsComponent key={i} definitions={mean}/>
        ))}
      </div>

      <ul>
        {props.meanings.synonyms.map((word, i) => (
            <li key={i}>{word}</li>
        ))}
      </ul>

      <ul>
        {props.meanings.antonyms.map((word1, i) => (
            <li key={i}>{word1}</li>
        ))}
      </ul>

    </div>
  );
}
export default PartOfSpeechComponent;
