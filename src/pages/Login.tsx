import React, {useState} from 'react';
import axios from "axios";
import {backendPort, expressBaseApi} from "../constants/constants";
import {Navigate} from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const sendUser = async () => {
        try {
            await axios.post('http://localhost:' + backendPort + expressBaseApi + '/login', user)
                .then((data) => {
                    localStorage.setItem('token', data.data.token)
                })
            return <Navigate replace={true} to={'/catalog/1'}/>
        } catch (er) {
            console.log(er)
        }
    }


    return (
        
        <div className="reg-bg">
            <p>{localStorage.getItem('token')}</p>
            <div className="grad-bg">
                <div className="welcome">Войти</div>
                <div id="form">
                    <input onChange={(e) => user.username = e.target.value} type="text" className="user" name="username"
                           placeholder="Имя пользователя" required/>
                    <input onChange={(e) => user.password = e.target.value} type="password" className="user"
                           name="password" placeholder="Пароль" required/>

                    <button onClick={() => sendUser()} className={'login_btn'} type="submit">Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Login;