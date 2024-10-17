import React, {useContext, useEffect, useRef, useState} from 'react';
import {BookProps} from "../components/Book/Book";
import axios from "axios";
import {isLoadingStore, pageStore, searchCriteria} from "../stores";
import {Books} from "./books";
import {apiSearchUrl, backendPort, expressBaseApi, page} from "../constants/constants";
import {LoadingComp} from "../components/loading/loading";
import {observer} from "mobx-react-lite";

interface BooksPageProps {
    content: string
}

export const BooksPage: React.FC<BooksPageProps> = observer(({content}) => {

    const criteriaStore = useContext(searchCriteria)
    const [books, setBooks] = useState<BookProps[]>([]);
    const [errMsg, setErrMas] = useState('');
    const isLoadingStoree = useContext(isLoadingStore)
    const pageStoree = useContext(pageStore)
    const spanRef = useRef(null)

    async function getMainCatalog() {
        isLoadingStoree.setIsLoading(true)
        pageStoree.setPage(Number(page))
        await axios.get<BookProps[]>('http://localhost:' + backendPort + expressBaseApi + '/catalog/' + pageStoree.page)
            .then((res) => {
                setBooks(res.data)
                // @ts-ignore-start
                pageStoree.setTotalPages(res.data.totalPages)
                isLoadingStoree.setIsLoading(false)
            })
    }

    const getBooksBySearch = async () => {
        isLoadingStoree.setIsLoading(true)
        pageStoree.setPage(1)
        criteriaStore.url = document.URL
        let localUrl = decodeURIComponent(decodeURIComponent(apiSearchUrl + criteriaStore.url.slice(criteriaStore.url.indexOf('?'), criteriaStore.url.length)))
        await axios.get<BookProps[]>(localUrl)
            .then((res) => {
                // @ts-ignore-start
                if (res.data.statusCode === 404) {
                    isLoadingStoree.setIsLoading(false)
                    setBooks([])
                    // @ts-ignore-start
                    setErrMas(res.data.error)
                } else {
                    setBooks(res.data)
                    // @ts-ignore-start
                    pageStoree.setTotalPages(res.data.totalPages)
                    isLoadingStoree.setIsLoading(false)
                }
            })
    }

    useEffect(() => {
        switch (content) {
            case 'catalog':
                getMainCatalog()
                break
            case 'search':
                getBooksBySearch()
                break
        }
    }, [pageStoree.page, content, criteriaStore.url])

    return (
        <>
            {
                !books.length ?
                    <>
                        <div className={'d-flex justify-content-center mt-3'}>
                            <span className={'not-found-msg'}>{errMsg}</span>
                        </div>
                    </>
                    : isLoadingStoree.isLoading ?
                        <LoadingComp/> : <Books books={books}/>
            }

        </>
    );
})
