import { GET_SHOWS_POPULAR, GET_SHOWS_TODAY, GET_SHOWS_TOP_RATE } from "../types/shows.types";


export const setFavoriteShow = ({status,data}) => {
    return async dispatch => {
        status ==200 ? dispatch({type:GET_SHOWS_POPULAR,listResult:data}) : null;
    }
}
export const setTopShow = ({status,data}) => {
    return async dispatch => {
        status ==200 ? dispatch({type:GET_SHOWS_TOP_RATE,listResult:data}) : null;
    }
}
export const setTodayShow = ({status,data}) => {
    return async dispatch => {
        status ==200 ? dispatch({type:GET_SHOWS_TODAY,listResult:data}) : null;
    }
}

