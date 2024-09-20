import React, {useContext, useEffect, useState} from 'react';
import {BookProps} from "../components/Book/Book";
import axios from "axios";
import {isLoadingStore, pageStore} from "../stores";
import {Books} from "./books";
import {apiSearchUrl, searchParams} from "../constants/constants";
import {LoadingComp} from "../components/loading/loading";

interface BooksPageProps {
    content: string
}

export const BooksPage: React.FC<BooksPageProps> = ({content}) => {

    const [books, setBooks] = useState<BookProps[]>([]);
    const isLoadingStoree = useContext(isLoadingStore)
    const pageStoree = useContext(pageStore)

    async function getBooksBySearch() {
        isLoadingStoree.setIsLoading(true)
        pageStoree.setPage(1)
        axios.get<BookProps[]>(apiSearchUrl + searchParams)
            .then((res) => {
                // @ts-ignore-start
                setBooks(res.data.content)
                // @ts-ignore-start
                pageStoree.setTotalPages(res.data.totalPages)
                isLoadingStoree.setIsLoading(false)
            })
    }

    async function getMainCatalog() {
        isLoadingStoree.setIsLoading(true)
        pageStoree.setPage(1)
        axios.get<BookProps[]>('http://localhost:8080/catalog/api/' + pageStoree.page)
            .then((res) => {
                // @ts-ignore-start
                setBooks(res.data.content)
                // @ts-ignore-start
                pageStoree.setTotalPages(res.data.totalPages)
                isLoadingStoree.setIsLoading(false)
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

    }, [pageStoree.page, content])

    return (
        <>
            {
                isLoadingStoree.isLoading ? <LoadingComp/> : <Books books={books}/>
            }
        </>
    );
}
