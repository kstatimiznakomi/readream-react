import React from "react";

interface PageProps {
    key: number
    page: number
}

export const PageBtnLink: React.FC<PageProps> = ({ page }) => {
    return (
            <li><span className="page-digits-bg-link">{page}</span></li>
    )
}