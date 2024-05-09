import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import React from "react";

export default function App() {

  let [itemList, setItemList] = React.useState([]);

  function handleAddItem(item){
    let x = [...itemList, item];
    setItemList(x);
  }

  function handleDelete(id){
    let x = itemList.filter((item)=>item.id !== id);
    setItemList(x);
  }

  function handleItem(id){
    let x = itemList.map((item)=> item.id === id ? {...item, packed: !item.packed} : item);
    setItemList(x);
  }

  return (
    <div className="App">
      <Logo />
      <Form handleAddItem={handleAddItem}/>
      <PackingList items={itemList} onDelete={handleDelete} onCheck={handleItem}/>
      <Stats/>
    </div>
  );
}
