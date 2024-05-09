import Item from "./Item";

export default function PackingList({items, onDelete, onCheck}){
    return <main className="packingList">
        <ul className="list">{items.map((item)=><Item {...item} key={item.id} onDelete={onDelete} onCheck={onCheck}/>)}</ul>
    </main>
}