export default function Stats({count, packed}){

    let percent = ((packed/count)*100).toFixed(2);
    return <footer className="stats">
        <h4>You have {count} items on your list. You already packed {packed} items. ({isNaN(percent) ? 0 : percent}%)</h4>
    </footer>
}