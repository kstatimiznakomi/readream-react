import React, { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { pageStore } from '../../stores';
import './book.module.scss';
import { BookInfo } from './BookInfo';

export interface BookProps {
    key: number
    id: number,
    bookName: string,
    description: string,
    img: string,
    count: number;
};

export const Book: React.FC<BookProps> = ({
    id,
    bookName,
    img,
    count,
    description
}) => {
    const pageStoree = useContext(pageStore)

    const BookInfoPlate = () => {
        return <BookInfo key={id} id={id} bookName={bookName} description={description} count={count} img={img}/>
    }

    return (
        <ul role='button' className="book book-bg mt-2 col-3 transition-all">
            <li>
                <div className="name-book">
                    <img className="book-img mt-2" alt={bookName} src={img}/>
                    <div className="w-100 mt-2 d-flex justify-content-center overflow-hidden book-nm">
                        <Link onClick={() => BookInfoPlate()} className="book-title text-center" to={
                            id.toString()
                        }>{bookName}</Link>
                        <Routes>
                            <Route path={'/catalog/' + pageStoree.page + '/:id'} element={
                                BookInfoPlate()
                            }/>
                        </Routes>
                    </div>
                    <span>Количество: {count}</span>
                </div>
            </li>
        </ul>
    )
}

export default Book