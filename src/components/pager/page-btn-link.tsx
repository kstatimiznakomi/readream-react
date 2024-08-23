import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { pageStore } from "../../stores";

interface PageProps {
    className?: string
    key: number
    page: number
    onClick?: void
}

export const PageBtnLink: React.FC<PageProps> = ({ page, className }) => {
    const pageStoree = useContext(pageStore)

    const ifLink = () => {
        switch(className){
            case 'page-digits-bg-link':
                return (
                    <Link className={className} onClick={() => pageStoree.setPage(page)} to={'/catalog/' + page}>{page}</Link>
                )
            case 'page-digits-span':
                return (
                    <span className={className}>{page}</span>
                )
        } 
    }

    return (
            <li>
                {
                    ifLink()
                }
            </li>
    )
}