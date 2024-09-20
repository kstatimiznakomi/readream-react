import axios from "axios"
import {useEffect, useState} from "react"
import {CriteriaTypes} from "../../enums/enum"
import {Input} from "../Input/Input"
import {Select} from "../Select/Select"
import {SearchBtn} from "../button/SearchBtn"
import {AuthorProps, GenresProps, PublisherProps} from "../../types/Types";
import {useNavigate} from "react-router-dom";
import {baseUrl} from "../../constants/constants";

interface CriteriesProps {
    content: string
}

export const Criteries: React.FC<CriteriesProps> = ({content}) => {
    const [selectedAuthor, setSelectedAuthor] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedPublisher, setSelectedPublisher] = useState('')
    const [selectedTextSearch, setSelectedTextSearch] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const [authors, setAuthors] = useState<AuthorProps[]>([])
    const [genres, setGenres] = useState<GenresProps[]>([])
    const [publishers, setPublishers] = useState<PublisherProps[]>([])
    const [url, setUrl] = useState(baseUrl)
    const navigate = useNavigate()

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

    const createUrl = (param: string, value: number | string) => {
        let params = new URLSearchParams(url)
        params.forEach(item => console.log(item))
        params.set('page', '1')
        if (value !== '0' || '') {
            params.set(param, value.toString())
            setUrl(decodeURIComponent(params.toString()))
        } else {
            params.delete(param)
        }
    }

    const setCriteriaState = (param: string, value: number | string) => {
        createUrl(param, value)
        switch (param) {
            case 'authorId':
                setSelectedAuthor(value.toString())
                break
            case 'genreId':
                setSelectedGenre(value.toString())
                break
            case 'publisherId':
                setSelectedPublisher(value.toString())
                break
            case 'date':
                setSelectedDate(value.toString())
                break
            case 'searchText':
                setSelectedTextSearch(value.toString())
                break
        }
    }

    const sendCriteria = () => {
        console.log(url)
        console.log(url.slice(document.URL.indexOf('?'), document.URL.length - 1))
        navigate(url, {replace: true})
    }

    async function setCriteriaFromURL() {
        let params = new URLSearchParams(document.URL)
        // @ts-ignore
        setSelectedAuthor(params.get('authorId'))
        // @ts-ignore
        setSelectedGenre(params.get('genreId'))
        // @ts-ignore
        setSelectedPublisher(params.get('publisherId'))
        // @ts-ignore
        setSelectedDate(params.get('date'))
        // @ts-ignore
        setSelectedTextSearch(params.get('textSearch'))
    }

    const resetSelected = () => {
        setSelectedAuthor('0')
        setSelectedGenre('0')
        setSelectedPublisher('0')
        setSelectedDate('')
        setSelectedTextSearch('')
    }

    window.onload = () => {
        setCriteriaFromURL()
    }

    useEffect(() => {
        content === 'search' ? setCriteriaFromURL() : resetSelected()
        getItems()
    }, [selectedAuthor, selectedGenre, selectedPublisher, selectedTextSearch, selectedDate, content])

    return (
        <section className="container d-flex justify-content-between">
            <div className="criteria w-100 combo">
                <div className="d-flex w-100 align-content-stretch gap-2 justify-content-between flex-wrap">
                    <Select value={selectedAuthor}
                            onChange={(e) => setCriteriaState(CriteriaTypes.Authors, e.target.value)}
                            key={"author"}
                            id={CriteriaTypes.Authors.toString()}
                            selectName={CriteriaTypes.Authors}
                            options={authors}
                    />
                    <Select value={selectedGenre}
                            onChange={(e) => setCriteriaState(CriteriaTypes.Genres, e.target.value)}
                            key={"genres"}
                            id={CriteriaTypes.Genres.toString()} selectName={CriteriaTypes.Genres}
                            options={genres}/>
                    <Select value={selectedPublisher}
                            onChange={(e) => setCriteriaState(CriteriaTypes.Publishers, e.target.value)}
                            key={"publishers"}
                            id={CriteriaTypes.Publishers.toString()}
                            selectName={CriteriaTypes.Publishers} options={publishers}/>
                    <Input value={selectedDate} onChange={(e) => setCriteriaState(CriteriaTypes.Date, e.target.value)}
                           type={'number'} className={"input-date"} placeholder="Введите дату выпуска"/>
                    <Input onChange={(e) => setCriteriaState(CriteriaTypes.Date, e.target.value)}
                           type={'hidden'} value={'1'} name={'page'}/>
                </div>
                <div className="search mt-3 d-flex w-100 justify-content-between align-items-center">
                    <Input value={selectedTextSearch}
                           onChange={(e) => setCriteriaState(CriteriaTypes.Bookname, e.target.value)}
                           className="search-input"
                           placeholder="Введите название книги"/>
                    <SearchBtn onClick={() => sendCriteria()}></SearchBtn>
                </div>
            </div>
        </section>
    )
}