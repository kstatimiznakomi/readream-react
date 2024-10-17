import React, {useEffect, useState} from 'react';
import UserInfo from "../components/UserInfo";
import axios from "axios";
import {UserProps} from "../types/Types";
import {backendPort, expressBaseApi} from "../constants/constants";


interface ProfileProp {
    username?: string
}

const Profile: React.FC<ProfileProp> = ({username}) => {
    const [user, setUser] = useState<UserProps>()

    const getUserProfile = async () => {
        try {
            await axios.get<UserProps>(`http://localhost:${backendPort}${expressBaseApi}/${username}`)
                .then((res) => {
                    setUser(res.data)
                })
        } catch (er) {
            console.log(er)
        }
    }

    useEffect(() => {
        getUserProfile()
    }, [setUser])

    return (
        <div className="flex-container prof-bg">
            <div className="prof-grad-bg">
                <div className="welcome">Профиль</div>
                <div className="profile-info">
                    <img src="https://i.postimg.cc/9M8MFp0d/free-icon-open-book-3145858.png" height="319px"
                         width="319px" alt="книга"/>
                    <div className="info">
                        <div className="info-img">
                            <img src="https://i.postimg.cc/yNS4SyLh/free-icon-user-8150564.png" height="120px"
                                 width="120px" alt="книга"/>
                        </div>
                        <UserInfo user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;