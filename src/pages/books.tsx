import {observer} from 'mobx-react-lite';
import React from 'react';
import Book, {BookProps} from '../components/Book/Book';

export interface CatalogProps {
    books: BookProps[]
}

export const Books: React.FC<CatalogProps> = observer(({books}) => {
    return (
        <section className="container">
            <div id="content" className="row gap-3">
                {
                    books.map((book) => (
                        <Book key={book.id}
                              id={book.id}
                              bookName={book.bookName}
                              img={book.img}
                              count={book.count}
                              description={book.description}/>
                    ))
                }
            </div>
        </section>
    )
})
