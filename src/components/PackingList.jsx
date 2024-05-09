import Item from "./Item";

export default function PackingList({items}){
    return <main className="packingList">
        <ul className="list">{items.map((item)=><Item {...item} key={item.id}/>)}</ul>
    </main>
}