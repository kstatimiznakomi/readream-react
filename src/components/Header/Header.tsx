import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Header.module.scss';
import {getUserProfile} from "../../utils/get-user";

export const Header: React.FC = () => {
    const [user, setUser] = useState()
    const getUser = async () => {
        console.log(getUserProfile())
    }

    /*useEffect(() => {
        getUser()
    }, [setUser])*/

    return (
        <section className="head sticky-top">
            <header className="header flex-wrap">
                <img src="https://i.postimg.cc/9FpWWbkr/rd-lib.png" height={40} width={40} alt="logo"/>

                <div className="d-flex gap-2">
                    <Link to="/">Главная</Link>
                    <Link to="/catalog/1">Каталог</Link>
                    <Link to="/about">О нас</Link>
                </div>
                <div className='d-flex gap-2'>
                    <Link to={'/one'}>Профиль</Link>
                    {
                        !localStorage.getItem('token') ? <Link to={'/login'}>Войти</Link>
                            : ''
                    }
                    {
                        localStorage.getItem('token') ? <Link to={'/logout'}>Выйти</Link>
                            : ''
                    }

                    <li>Зарегистрироваться</li>
                    <span></span>
                </div>
            </header>
        </section>
    )
}

export default Header;