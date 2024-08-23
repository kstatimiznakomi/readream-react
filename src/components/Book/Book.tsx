import React from 'react';
import { Link } from 'react-router-dom';
import './book.module.scss';

export interface BookProps {
    key: number
    id: number,
    bookName: string,
    img: string,
    count: number;
};

export const Book: React.FC<BookProps> = ({
    id,
    bookName,
    img,
    count
}) => {
    return (
        <ul role='button' className="book book-bg mt-2 col-3 transition-all">
            <li>
                <div className="name-book">
                    <img className="book-img mt-2" alt={bookName} src={img}/>
                    <div className="w-100 mt-2 d-flex justify-content-center overflow-hidden book-nm">
                        <Link className="book-title text-center" to={id.toString()}>
                            <span>{bookName}</span>
                        </Link>
                    </div>
                    <span>Количество: {count}</span>
                </div>
            </li>
        </ul>
    )
}

export default Book