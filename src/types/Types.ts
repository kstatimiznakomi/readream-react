import {BookProps} from "../components/Book/Book";

export interface SearchTypes {
    bookName?: string
    authorId?: number
    genreId?: number
    publisherId?: number
    date?: number
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