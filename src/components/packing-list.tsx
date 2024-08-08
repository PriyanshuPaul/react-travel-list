import { useState } from "react"
import { Item } from "../models/item.model"
import ItemSection from "./item"

const PackingList = ({ items, onDeleteItem, onCheckedItem }: { items: Array<Item>, onDeleteItem, onCheckedItem }) => {
    const [sortOrder, setSortOrder] = useState("input")
    let sortedItems = [];
    if (sortOrder === "input")
        sortedItems = items
    else if (sortOrder === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    else
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map((item) => (
                        <ItemSection item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckedItem={onCheckedItem} />
                    ))
                }
            </ul>
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
        </div>
    )
}
export default PackingList