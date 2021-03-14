import axios from "axios"
import { airingToday, getTvPopular, getTvTopRate } from "../../constants/apiData";


export const getFavoriteShowsList = async ( page = 1 ) => {    
    const { data, status } = await axios.get(`${getTvPopular}&page=${page}`);
    return {status,data};
}
export const getTopShowsList = async ( page = 1 ) => {
    const { data,status } = await axios.get(`${getTvTopRate}&page=${page}`);
    return {status,data};
}
export const getTdayShowsList = async ( page = 1 ) => {
    const { data,status } = await axios.get(`${airingToday}&page=${page}`);    
    return {status,data};
}