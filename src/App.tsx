import {observer} from 'mobx-react-lite';
import {useContext, useEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import './biblio.scss';
import Header from './components/Header/Header';
import {Pager} from './components/pager/Pager';
import {Main} from './pages/main';
import {isLoadingStore, pageStore} from './stores';
import {About} from "./pages/about";
import {BooksPage} from "./pages/BooksPage";
import {Criteries} from "./components/Criteries/Criteries";
import Profile from "./pages/Profile";
import Login from "./pages/Login";


export const App = observer(() => {

    const pageStoree = useContext(pageStore)
    const isLoadingStoree = useContext(isLoadingStore)
    const location = useLocation()

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
                <Route path={'/'} element={
                    <Main/>
                }/>
                <Route path={'/:username'} element={
                    <Profile username={location.pathname.replace('/', '')}/>
                }/>

                <Route path={'/login'} element={!localStorage.getItem('token') ?
                    <Login/> : <Navigate replace={true} to={'/catalog/1'}/>
                }/>

                {/*<Route path={'/logout'} element={
                    localStorage.getItem('token')
                        ? (
                            localStorage.removeItem('token'),
                                <BooksPage content={'catalog'}/>
                        )
                        :
                        <BooksPage content={'catalog'}/>
                }/>*/}

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
                        {/*{
                            isLoadingStoree.isLoading ? '' :
                                <Pager currentPage={pageStoree.page} pageMin={1} pageMax={pageStoree.totalPages}/>
                        }*/}
                    </>

                }/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </>
    );
})

export default App;
