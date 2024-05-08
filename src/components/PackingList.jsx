import Item from "./Item";

const travelItems = [
    {
      id: 1,
      name: 'Passport',
      quantity: 1,
      description: 'Official identification for travel',
      packed: false
    },
    {
      id: 2,
      name: 'Toothbrush',
      quantity: 2,
      description: 'For maintaining dental hygiene',
      packed: true
    },
    {
      id: 3,
      name: 'Sunscreen',
      quantity: 1,
      description: 'Protection against harmful UV rays',
      packed: false
    },
    {
      id: 4,
      name: 'Camera',
      quantity: 1,
      description: 'To capture memorable moments',
      packed: true
    }
  ];

export default function PackingList(){
    return <main className="packingList">
        <ul className="list">{travelItems.map((item)=><Item {...item} key={item.id}/>)}</ul>
    </main>
}