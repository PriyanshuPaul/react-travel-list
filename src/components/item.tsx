import { Item } from "../models/item.model"

const ItemSection = ({ item, onDeleteItem }: { item: Item, onDeleteItem }) => {
    return (<li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>)
}
export default ItemSection