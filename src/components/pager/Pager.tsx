import React from "react";
import { PageBtn } from "./page-btn";
import { PageBtnLink } from "./page-btn-link";

interface Pages {
    currentPage: number
    pageMin: number
    pageMax: number
}

export const Pager: React.FC<Pages> = ({ currentPage, pageMin, pageMax }) => {

    const renderPages = (currentPage: number, pageMin: number, pageMax: number) => {
        let pages = []
        for (let i = pageMin; i <= pageMax; i++){
           i === currentPage ? pages.push(<PageBtn key={i} page={i} ></PageBtn>)
           : pages.push(<PageBtnLink key={i} page={i} ></PageBtnLink>)
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
}