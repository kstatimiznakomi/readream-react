import axios from "axios"
import {useContext, useEffect, useState} from "react"
import {CriteriaTypes} from "../../enums/enum"
import {Input} from "../Input/Input"
import {Select} from "../Select/Select"
import {SearchBtn} from "../button/SearchBtn"
import {AuthorProps, GenresProps, PublisherProps, SearchTypes} from "../../types/Types";
import {useNavigate} from "react-router-dom";
import {backendPort, baseUrl, expressBaseApi, searchStart} from "../../constants/constants";
import {searchCriteria} from "../../stores";

interface CriteriesProps {
    content: string
}

export const Criteries: React.FC<CriteriesProps> = ({content}) => {
    // @ts-ignore
    const [params, setParams]: Partial<SearchTypes> = useState({
        p: 1,
        aid: '',
        gen: '',
        publisherId: '',
        d: '',
        t: '',
    })

    const criteriaStore = useContext(searchCriteria)
    const [authors, setAuthors] = useState<AuthorProps[]>([])
    const [genres, setGenres] = useState<GenresProps[]>([])
    const [publishers, setPublishers] = useState<PublisherProps[]>([])
    const [url, setUrl] = useState(baseUrl)
    const navigate = useNavigate()

    async function getItems() {
        axios.get<AuthorProps[]>('http://localhost:' + backendPort + expressBaseApi + '/authors')
            .then((res) => {
                setAuthors(res.data)
            })
        axios.get<GenresProps[]>('http://localhost:' + backendPort + expressBaseApi + '/genres')
            .then((res) => {
                setGenres(res.data)
            })
        axios.get<PublisherProps[]>('http://localhost:' + backendPort + expressBaseApi + '/publishers')
            .then((res) => {
                setPublishers(res.data)
            })
    }

    const createUrl = () => {
        let paramsForURL = new URLSearchParams(url)
        Object.entries(criteriaStore.params).forEach((item) => {
            if (item[1] !== '' && item[1] !== '0') paramsForURL.set(item[0], item[1])
            else paramsForURL.delete(item[0])
        })
        let thisUrl = decodeURIComponent(paramsForURL.toString())
            .replace('&', '')
            .replace('=', '')

        criteriaStore.url = thisUrl

        navigate(decodeURIComponent(searchStart + criteriaStore.url.slice(criteriaStore.url.lastIndexOf('?'), criteriaStore.url.length)))
    }


    async function setCriteriaFromURL() {
        // eslint-disable-next-line no-restricted-globals
        let search = decodeURIComponent(location.search.substring(1))
        const criteriaJson = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

        Object.entries(criteriaJson).forEach((item) => {
            if (item[0] !== 'p') {
                let elem = document.getElementById(item[0])
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                elem.value = item[1]
            }
        })
    }

    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // @ts-ignore
        e.key === 'Enter' && createUrl()
    }

    window.onload = () => {
        content === 'search' ? setCriteriaFromURL() : criteriaStore.resetSelected()
    }

    useEffect(() => {
        //content === 'search' ? setCriteriaFromURL() : resetSelected()
        getItems()
    }, [params, content])

    return (
        <>
            <section className="container d-flex justify-content-between">
                <div className="criteria w-100 combo ">
                    <div id={'criteria'}
                         className="d-flex w-100 align-content-stretch gap-2 justify-content-between flex-wrap">
                        <Select
                            onChange={(e) => criteriaStore.setCriteriaState(CriteriaTypes.Authors, e.target.value)}
                            key={"author"}
                            id={CriteriaTypes.Authors.toString()}
                            selectName={CriteriaTypes.Authors}
                            options={authors}
                        />
                        <Select
                            onChange={(e) => criteriaStore.setCriteriaState(CriteriaTypes.Genres, e.target.value)}
                            key={"genres"}
                            className={'criteriaSelect'}
                            id={CriteriaTypes.Genres.toString()} selectName={CriteriaTypes.Genres}
                            options={genres}
                        />
                        <Select
                            onChange={(e) => criteriaStore.setCriteriaState(CriteriaTypes.Publishers, e.target.value)}
                            key={"publishers"}
                            className={'criteriaSelect'}
                            id={CriteriaTypes.Publishers.toString()}
                            selectName={CriteriaTypes.Publishers} options={publishers}
                        />
                        <Input onKeyUp={(e) => keyDown(e)}
                               onChange={(e) => criteriaStore.setCriteriaState(CriteriaTypes.Date, e.target.value)}
                               type={'number'} className={"input-date criteriaSelect"}
                               placeholder="Введите дату выпуска"
                        />
                        <Input onChange={(e) => criteriaStore.setCriteriaState(CriteriaTypes.Page, e.target.value)}
                               type={'hidden'} value={'1'} name={'page'} className={'criteriaSelect'}
                        />
                    </div>
                    <div className="search mt-3 d-flex w-100 justify-content-between align-items-center">
                        <Input onKeyUp={(e) => keyDown(e)}
                               id={CriteriaTypes.Bookname}
                               onChange={(e) => criteriaStore.setCriteriaState(CriteriaTypes.Bookname, e.target.value)}
                               className="search-input criteriaSelect"
                               placeholder="Введите название книги"/>
                        <SearchBtn onClick={() => createUrl()}></SearchBtn>
                    </div>
                </div>
            </section>
        </>
    )
}