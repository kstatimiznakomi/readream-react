import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './biblio.scss';
import { BookProps } from './components/Book/Book';
import { Criteries } from './components/Criteries/Criteries';
import Header from './components/Header/Header';
import { SelectProps } from './components/Select/Select';
import Catalog from './pages/catalog';

export function App() {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<BookProps[]>([]);
  const [selectItems, setSetSelectItems] = useState<SelectProps[]>([]);

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
