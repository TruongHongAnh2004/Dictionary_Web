import { AiFillStar } from "react-icons/ai";
import { Definitions, Meanings } from "./type";

function DefinitionsComponent(props: {
  definitions: Definitions;
  num: number;
}) {
  return (
    <div>
      <p className="font-semibold flex my-2">
        {props.num + 1}: {props.definitions.definition}
      </p>

      <p className="italic px-5">{props.definitions.example}</p>
    </div>
  );
}
export default DefinitionsComponent;
