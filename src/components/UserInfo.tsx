import React from 'react';
import {UserProps} from "../types/Types";
import {Link} from "react-router-dom";

interface User {
    user: UserProps | undefined
}

const UserInfo: React.FC<User> = ({user}) => {
    return (

        <div
            className={user ? 'info-details d-flex' : 'info-details d-flex justify-content-center align-content-center'}
            id="info-details">
            {
                user ?
                    <>
                        <div className={'w-100'}>
                            <span className="user-dtls">{user?.lastname}</span>
                            <hr className="info-details-hr"/>
                            <span className="user-dtls">{user?.name}</span>
                            <hr className="info-details-hr"/>
                            <span className="user-dtls">{user?.surname}</span>
                            <hr className="info-details-hr"/>
                            <span className="user-dtls">{user?.username}</span>
                            <hr className="info-details-hr"/>
                            <span className="user-dtls ">{user?.email}</span>
                            <hr className="info-details-hr"/>
                        </div>
                        <div>
                            <Link to={'/profile/edit'}>
                                <img title={'Редактировать профиль'} src="https://i.postimg.cc/zvTwZpdX/pencil.png"
                                     alt="edit"
                                     height="15px"/>
                            </Link>
                        </div>
                    </>
                    :
                    <span className={'not-found-msg'}>Данный пользователь не найден :(</span>
            }

        </div>
    );
};

export default UserInfo;