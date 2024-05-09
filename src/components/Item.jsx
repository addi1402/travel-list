import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Item(props) {

  let [checked, setChecked] = React.useState(props.packed);

  function handleChange(id){
    setChecked(!checked);
    props.onCheck(id);
  }

  return (
    <li>
      <input type="checkbox" name="packed" id="packed" checked={checked} onChange={() => handleChange(props.id)}/>
      <span
        className={checked ? "packed-item" : ""}
      >{`${props.quantity} ${props.description}`}</span>
      <button className="delete-button" onClick={() => props.onDelete(props.id)}>
        <AiOutlineClose className="icon"/>
      </button>
    </li>
  );
}