import { AiOutlineClose } from "react-icons/ai";

export default function Item(props) {
  return (
    <li>
      <span
        className={props.packed ? "packed-item" : ""}
      >{`${props.quantity} ${props.name}`}</span>
      <button className="delete-button">
        <AiOutlineClose className="icon"/>
      </button>
    </li>
  );
}