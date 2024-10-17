import axios from "axios";
import {UserProps} from "../types/Types";
import {backendPort, expressBaseApi} from "../constants/constants";

export const getUserProfile = async () => {
    try {
        await axios.post<UserProps>(`http://localhost:${backendPort}${expressBaseApi}/current-user`, {
            'token': localStorage.getItem('token')
        })
            .then((res) => {
                return res
            })
    } catch (er) {
        console.log(er)
    }
}