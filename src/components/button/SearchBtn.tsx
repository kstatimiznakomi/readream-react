interface SearchBtnProps {
    className?: string
}

export const SearchBtn: React.FC<SearchBtnProps> = ({ className }) => {
    return (
        <button id="search-button" className={className}>
            <img height="15px" width="15px" alt="поиск" src="https://i.postimg.cc/k405b5NG/search-interface-symbol.png"></img>
        </button>
    )
}