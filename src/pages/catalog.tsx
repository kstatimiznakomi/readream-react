import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import Book, { BookProps } from '../components/Book/Book';
import { LoadingComp } from '../components/loading/loading';
import { isLoadingStore, pageStore } from '../stores';

export interface CatalogProps {
    page: number
    setTotalPages: (value: number) => void
}

export const Catalog: React.FC<CatalogProps> = observer(({ page, setTotalPages }) => {
    const isLoadingStoree = useContext(isLoadingStore)
    const [books, setBooks] = useState<BookProps[]>([]);
    const pageStoree = useContext(pageStore)
  
    async function getBooks() {
        isLoadingStoree.setIsLoading(true)
        axios.get<BookProps[]>('http://localhost:8080/catalog/api/' + page)
        .then((res) => {
        // @ts-ignore-start
        setBooks(res.data.content)
        // @ts-ignore-start
        setTotalPages(res.data.totalPages)
        isLoadingStoree.setIsLoading(false)
    })}

    useEffect(() => {
        getBooks()
    }, [pageStoree.page])

    return (
        isLoadingStoree.isLoading ? <LoadingComp/> : 
        <section className="container">
            <div id="content" className="row gap-3">
            {
                books.map((book) => (
                    <Book key={book.id} id={book.id} bookName={book.bookName} img={book.img} count={book.count} />
                ))
            }
            </div>
        </section>
    )
})
