import { Item } from "../models/item.model"

const PackingList = ({ items }: { items: Array<Item> }) => {
    return (
        <div className="list">
            <ul>
                {
                    items.map((item) => (
                        <li>
                            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
                            <button>❌</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default PackingList