import { useState } from "react"
import { Item } from "../models/item.model";


const AddForm = ({ onAddItems }) => {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    const addItem = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (!description) return;
        const packingItem: Item = {
            description: description,
            quantity: quantity,
            packed: false,
            id: Date.now()
        };
        onAddItems(packingItem)
        setDescription('');
        setQuantity(1);
        console.log(packingItem)
    }

    return (


        <form className="add-form" onSubmit={addItem}>
            <h3>What do you need for this trip? 🤔</h3>
            <select value={quantity} onChange={(e) => {
                setQuantity(+e.target.value) //coverts string to number using unary+
            }}>
                {
                    /*
                    We create an array using Array.from. _ i.e the first parameter is used to denote the array itself 
                    and the second parameter becomes the index. We then chain map function to the array to iterate it and create 
                    a dropdown list of 20.
                    */
                    Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
                        <option value={num} key={num}>{num}</option>
                    )
                }
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button>Add</button>
        </form>
    )
}
export default AddForm