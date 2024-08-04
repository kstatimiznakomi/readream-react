import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Main } from "../../pages/main";
import './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <section className="head sticky-top">
            <header className="header">
                <img src="https://i.postimg.cc/9FpWWbkr/rd-lib.png" height={40} width={40} alt="logo"/>
                <div>
                    <nav>
                    <ul className="menu d-flex gap-2">
                        <Routes>
                            <Route path="/" element={<Main/>} />
                        </Routes>
                        <Link to="/">Главная</Link>
                        <Link to="/catalog">Каталог</Link>
                        <li>О нас</li>
                        <li>Профиль</li>
                    </ul>
                </nav>
                </div>
                <div className='d-flex gap-2'>
                   <li>Выйти</li>
                <li>Войти</li>
                <li>Зарегистрироваться</li> 
                </div>
            </header>
        </section>
    )
}

export default Header;