import { Definitions, Meanings } from "./type";

function DefinitionsComponent(props: { definitions: Definitions }) {
  return (
    <div>
      <p>{props.definitions.definition}</p>
      <p>{props.definitions.example}</p>
      
    </div>
  );
}
export default DefinitionsComponent;
