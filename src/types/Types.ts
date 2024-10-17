import {BookProps} from "../components/Book/Book";

export interface SearchTypes {
    p?: string
    t?: string
    aid?: string
    gen?: string
    publisherId?: string
    d?: string
}

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

export interface UserProps {
    username: string,
    email: string,
    name: string,
    lastname: string,
    surname: string,
}