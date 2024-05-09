import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import React from "react";

export default function App() {

  let [itemList, setItemList] = React.useState([]);

  return (
    <div className="App">
      <Logo />
      <Form items={itemList} setItems={setItemList}/>
      <PackingList items={itemList}/>
      <Stats/>
    </div>
  );
}
