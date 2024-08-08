import { Item } from "../models/item.model"

const ItemSection = ({ item, onDeleteItem, onCheckedItem }: { item: Item, onDeleteItem, onCheckedItem }) => {
    return (<li>
        <input type="checkbox" checked={item.packed} onChange={() => onCheckedItem(item.id)}></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>)
}
export default ItemSection