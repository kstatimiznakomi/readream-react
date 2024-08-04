import axios from "axios"
import { useEffect, useState } from "react"
import { BookProps } from "../Book/Book"
import { Select } from "../Select/Select"

export interface AuthorProps {
    authorLastName: string
    authorName: string
    authorSurname: string
    books: BookProps[]
    id: number
}

export interface GenresProps {
    genreName: string
    books: BookProps[]
    id: number
}

export const Criteries: React.FC = () => {

    const [authors, setAuthors] = useState<AuthorProps[]>([])
    const [genres, setGenres] = useState<GenresProps[]>([])

    async function getAuthors() {
        axios.get<AuthorProps[]>('http://localhost:8080/author/api')
        .then((res) => {
            setAuthors(res.data)
        })
    }

    async function getGenres() {
        axios.get<GenresProps[]>('http://localhost:8080/genres/api')
        .then((res) => {
            setGenres(res.data)
        })
    }

    useEffect(() => {
        getAuthors()
        getGenres()
    }, [])

    return (
    <div>
        <section className="container d-flex justify-content-between">
            <div className="criteria">
                <Select key={"author"} selectName={"author"} options={authors}/>
                <Select key={"genres"} selectName={"genres"} options={genres}/>
            </div>
        </section>
    </div>
        
    )
}