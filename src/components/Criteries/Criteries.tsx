import axios from "axios"
import { useEffect, useState } from "react"
import { CriteriaTypes } from "../../enums/enum"
import { BookProps } from "../Book/Book"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"
import { SearchBtn } from "../button/SearchBtn"

export interface AuthorProps {
    authorLastName: string
    authorName: string
    authorSurname: string
    books: BookProps[]
    id: number
}

export interface GenresProps {
    publisherName: string
    books: BookProps[]
    authors: AuthorProps[]
    id: number
}

export interface PublisherProps {
    genreName: string
    books: BookProps[]
    id: number
}

export const Criteries: React.FC = () => {

    const [authors, setAuthors] = useState<AuthorProps[]>([])
    const [genres, setGenres] = useState<GenresProps[]>([])
    const [publishers, setPublishers] = useState<PublisherProps[]>([])

    async function getItems() {
        axios.get<AuthorProps[]>('http://localhost:8080/author/api')
        .then((res) => {
            setAuthors(res.data)
        })
        axios.get<GenresProps[]>('http://localhost:8080/genres/api')
        .then((res) => {
            setGenres(res.data)
        })
        axios.get<PublisherProps[]>('http://localhost:8080/publishers/api')
        .then((res) => {
            setPublishers(res.data)
        })
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <section className="container d-flex justify-content-between">
            <div className="criteria w-100 container">
                <div className="w-100 combo">
                    <div className="d-flex justify-content-between">
                        <Select key={"author"} id={CriteriaTypes.Authors.toString()} selectName={CriteriaTypes.Authors} options={authors}/>
                        <Select key={"genres"} id={CriteriaTypes.Genres.toString()} selectName={CriteriaTypes.Genres} options={genres}/>
                        <Select key={"publishers"} id={CriteriaTypes.Publishers.toString()} selectName={CriteriaTypes.Publishers} options={publishers}/>
                        <Input className={"input-date"} placeholder="Введите дату выпуска" />
                    </div>
                    <div className="search mt-3 d-flex w-100 justify-content-between align-items-center">
                        <Input className="search-input" placeholder="Введите название книги" />
                        <SearchBtn></SearchBtn>
                    </div>
                </div>
                
            </div>
        </section>
    )
}