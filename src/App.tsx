import {observer} from 'mobx-react-lite';
import {useContext, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './biblio.scss';
import {Criteries} from './components/Criteries/Criteries';
import Header from './components/Header/Header';
import {Pager} from './components/pager/Pager';
import {Main} from './pages/main';
import {isLoadingStore, pageStore} from './stores';
import {About} from "./pages/about";
import {BooksPage} from "./pages/BooksPage";


export const App = observer(() => {

    const pageStoree = useContext(pageStore)
    const isLoadingStoree = useContext(isLoadingStore)

    const setPageApp = () => {
        pageStoree.setPage(parseInt(document.URL.substring(document.URL.lastIndexOf('/') + 1)))
    }

    useEffect(() => {
        setPageApp()
    }, [pageStoree.page])

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={
                    <Main/>
                }/>
                <Route path={'/catalog/*'} element={
                    <>
                        <Criteries content={'catalog'}/>
                        <BooksPage content={'catalog'}/>
                        {
                            isLoadingStoree.isLoading ? null :
                                <Pager currentPage={pageStoree.page} pageMin={1} pageMax={pageStoree.totalPages}/>
                        }
                    </>
                }/>
                <Route path={'/search?'} element={
                    <>
                        <Criteries content={'search'}/>
                        <BooksPage content={'search'}/>
                        {
                            isLoadingStoree.isLoading ? null :
                                <Pager currentPage={pageStoree.page} pageMin={1} pageMax={pageStoree.totalPages}/>
                        }
                    </>

                }/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </>
    );
})

export default App;
