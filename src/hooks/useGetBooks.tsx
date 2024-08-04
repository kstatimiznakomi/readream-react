import { useEffect, useState } from 'react';
import { get } from '../fetch'
import { BookProps } from '../components/Book/Book';

// export const useBooksMain = () => {
    
//     const [books, setBooks] = useState<BookProps[]>([]);

//     const getBooks = async () => {
//         const { res } = await get<BookProps[]>('http://localhost:8080/catalog/api/');
//         setBooks(res)
//     }
    
//     useEffect(() => {
//         getBooks()
//     }, [])
// }