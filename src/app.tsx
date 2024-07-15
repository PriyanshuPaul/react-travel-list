import AddForm from './components/add-form';
import Footer from './components/footer';
import Header from './components/header';
import PackingList from './components/packing-list';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <AddForm />
      <PackingList />
      <Footer />
    </div>
  )
}

export default App;
