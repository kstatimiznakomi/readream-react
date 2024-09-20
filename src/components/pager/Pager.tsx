import {observer} from "mobx-react-lite";
import React from "react";
import {PageBtnLink} from "./page-btn-link";

interface Pages {
    currentPage: number
    pageMin: number
    pageMax: number
}

export const Pager: React.FC<Pages> = observer(({currentPage, pageMin, pageMax}) => {
    const renderPages = (currentPage: number, pageMin: number, pageMax: number) => {
        let pages = []
        for (let i = pageMin; i <= pageMax; i++) {
            i === currentPage ?
                pages.push(<PageBtnLink className='page-digits-span' key={i} page={i}/>)
                :
                pages.push(<PageBtnLink className='page-digits-bg-link' key={i} page={i}/>)
        }
        return pages
    }

    return (
        <div>
            <ul className="mt-1 paging justify-content-center">
                {
                    renderPages(currentPage, pageMin, pageMax)
                }
            </ul>
        </div>
    )
})