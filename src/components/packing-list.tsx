import { Item } from "../models/item.model"
import ItemSection from "./item"

const PackingList = ({ items, onDeleteItem, onCheckedItem }: { items: Array<Item>, onDeleteItem, onCheckedItem }) => {
    return (
        <div className="list">
            <ul>
                {
                    items.map((item) => (
                        <ItemSection item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckedItem={onCheckedItem} />
                    ))
                }
            </ul>
        </div>
    )
}
export default PackingList