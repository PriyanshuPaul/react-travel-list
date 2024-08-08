import { Item } from "../models/item.model"
import ItemSection from "./item"

const PackingList = ({ items, onDeleteItem }: { items: Array<Item>, onDeleteItem }) => {
    return (
        <div className="list">
            <ul>
                {
                    items.map((item) => (
                        <ItemSection item={item} key={item.id} onDeleteItem={onDeleteItem} />
                    ))
                }
            </ul>
        </div>
    )
}
export default PackingList