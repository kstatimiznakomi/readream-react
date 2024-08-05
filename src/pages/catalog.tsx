import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Book, { BookProps } from '../components/Book/Book';
import { LoadingComp } from '../components/loading/loading';
import { Pager } from '../components/pager/Pager';

export interface CatalogProps {
    
}

const Catalog: React.FC<CatalogProps> = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState<BookProps[]>([]);
  
    async function getBooks() {
        setIsLoading(true)
        axios.get<BookProps[]>('http://localhost:8080/catalog/api/' + page)
        .then((res) => {
        // @ts-ignore-start
        setBooks(res.data.content)
        // @ts-ignore-start
        setTotalPages(res.data.totalPages)
        setIsLoading(false)
    })}

    useEffect(() => {
        getBooks()
    }, [])

    return (
        isLoading ? <LoadingComp/> : 
        <section className="container">
            <div id="content" className="row">
            {
                books.map((book) => (
                    <Book key={book.id} id={book.id} bookName={book.bookName} img={book.img} count={book.count} />
                ))
            }
            </div>
            <Pager currentPage={page} pageMin={1} pageMax={totalPages} />
        </section>
    )
}

export default Catalog
