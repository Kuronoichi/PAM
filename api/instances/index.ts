import axios from "axios";
import {LoadWithAuthInterceptor} from "../interceptors/withAuth";

const address = 'my-address';

export const api = axios.create({
    baseURL: address,
    withCredentials: true,
})

LoadWithAuthInterceptor();
