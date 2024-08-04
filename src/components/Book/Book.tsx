import React from 'react';
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
    <div className="book-bg mt-2 col-3 transition-all">
        <ul className="book transition-all ml-0 mr-0">
            <li className="mr-0">
                <div className="name-book">
                    <img className="book-img mt-2" alt={bookName} src={img}/>
                    <div className="w-100 mt-2 overflow-hidden book-nm">
                        {/* <Link to={id.toString()}>{bookName}</Link> */}
                        <span className="book-title">{bookName}</span>
                    </div>
                    <span>Количество: {count}</span>
                </div>
            </li>
        </ul>
    </div>
    )
}

export default Book