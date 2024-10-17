import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {pageStore} from '../../stores';

export interface BookProps {
    key: number
    id: number,
    bookName: string,
    description: string,
    img: string,
    count: number;
};

export const Book: React.FC<BookProps> = ({id, bookName, img, count}) => {
    const pageStoree = useContext(pageStore)

    const [visibleBookInfo, setVisibleBookInfo] = useState(false)

    return (
        <ul role='button' className={'book book-bg  mt-2 col-3 transition-all'}>
            <li>
                <div className={'name-book'}>
                    <img className={'book-img  mt-2'} alt={bookName} src={img}/>
                    <div className={'w-100 mt-2 d-flex justify-content-center overflow-hidden book-nm'}>
                        <Link replace={false} aria-expanded={visibleBookInfo} onClick={() => setVisibleBookInfo(true)}
                              className={'book-title text-center'} to={
                            '/catalog/' + pageStoree.page + '/' + id
                        }>{bookName}</Link>
                        {/*<BookInfo visible={visibleBookInfo} key={id} id={id} bookName={bookName}
                                  description={description}
                                  count={count} img={img}/>*/}
                    </div>
                    <span>Количество: {count}</span>
                </div>
            </li>
        </ul>
    )
}

export default Book