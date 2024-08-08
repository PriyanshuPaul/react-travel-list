import { Item } from "../models/item.model"


const Footer = ({ items }: { items: Array<Item> }) => {
    const totalItems = items.length;
    if (!totalItems) return (<footer>
        <em>
            Start adding to your list 🚀
        </em>
    </footer>)
    const packedItems = items.filter((item) => item.packed).length
    const calculatePercentage = Math.round((packedItems / totalItems) * 100)

    return (
        <footer>
            <em>
                {calculatePercentage === 100 ? 'You are all set to go ✈️' : `👜 You have ${totalItems} items on your list and you have packed ${packedItems} items (${calculatePercentage}%)`}
            </em>
        </footer>
    )

}
export default Footer