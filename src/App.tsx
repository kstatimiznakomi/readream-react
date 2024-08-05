import { Route, Routes } from 'react-router-dom';
import './biblio.scss';
import { Criteries } from './components/Criteries/Criteries';
import Header from './components/Header/Header';
import Catalog from './pages/catalog';

export function App() {
  return (
<div>
      <Header />
      <Criteries/>
      <Routes>
        <Route path='/catalog' element={
          <Catalog />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
