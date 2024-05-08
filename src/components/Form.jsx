import React from "react";

export default function Form() {
  let [itemName, setItemName] = React.useState("");
  let [selected, setSelected] = React.useState(3);

  function handleSubmit(e) {
    e.preventDefault();
    if (itemName === "") return;
    let newItem = {
      description: itemName,
      quantity: selected,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
  }
  return (
    
    <form className="form-element" onSubmit={handleSubmit}>
      <div className="item-box">
      <div className="item-quantity">
        {" "}
        <label htmlFor="quantity">Quantity</label>
        <select
          name="quantity"
          id="quantity"
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

<div className="item-description">
  <label htmlFor="item-name">Item Name</label>
  <input
        type="text"
        name="item-name"
        id="item-name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter Item Name"
      />
</div>
</div>
      

      <button className="add">Add Item</button>
    </form>
  );
}
