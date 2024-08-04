import React from "react";

interface PageProps {
    key: number
    page: number
}

export const PageBtn: React.FC<PageProps> = ({ page }) => {
    return (
            <li><span className="page-digits-span">{page}</span></li>
    )
}