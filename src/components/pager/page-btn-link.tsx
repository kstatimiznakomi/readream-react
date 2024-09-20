import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {isLoadingStore, pageStore} from "../../stores";

interface PageProps {
    className?: string
    key: number
    page: number
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export const PageBtnLink: React.FC<PageProps> = ({page, className}) => {
    const pageStoree = useContext(pageStore)
    const isLoadingStoree = useContext(isLoadingStore)

    const setSettings = () => {
        pageStoree.setPage(page)
        isLoadingStoree.setIsLoading(true)
    }

    const ifLink = () => {
        switch (className) {
            case 'page-digits-bg-link':
                return (
                    <Link className={className} onClick={() => setSettings()}
                          to={'/catalog/' + page}>{page}</Link>
                )
            case 'page-digits-span':
                return (<span className={className}>{page}</span>)
        }
    }

    return (
        <li>{ifLink()}</li>
    )
}