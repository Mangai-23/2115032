import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import { DataProvider } from './context/DataProvider';
import Home from './components/Home';
function App() {
  return (
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </DataProvider>

  );
}

export default App;
