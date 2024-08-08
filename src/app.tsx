import { useState } from 'react';
import AddForm from './components/add-form';
import Footer from './components/footer';
import Header from './components/header';
import PackingList from './components/packing-list';
import { Item } from './models/item.model';
const initialItems: Array<Item> = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false }
];
const App = () => {
  const [items, setItems] = useState(initialItems)
  const handleAddItem = (item) => {
    setItems((items: Item[]) => {
      return [...items, item]
    })
  }
  const handleDeleteItem = (key) => {
    setItems((items: Item[]) =>
      items.filter((item) =>
        item.id !== key
      )
    )
  }
  const handleCheckedItem = (key) => {
    setItems((items) =>
      items.map((item) =>
        item.id === key ? { ...item, packed: !item.packed } : item
      )
    )
  }
  return (

    <div className='app'>
      <Header />
      <AddForm onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onCheckedItem={handleCheckedItem} />
      <Footer />
    </div>
  )
}

export default App;
