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
  return (
    <div className='app'>
      <Header />
      <AddForm />
      <PackingList items={initialItems} />
      <Footer />
    </div>
  )
}

export default App;
