import { getLocalStorangeShows } from "../reducers/shows.reducer";
import { CHANGE_SAVED, GET_SHOWS_POPULAR, GET_SHOWS_TODAY, GET_SHOWS_TOP_RATE } from "../types/shows.types";


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

export const savedShow = (id) => {   
    return dispatch => {
        const savedList = getLocalStorangeShows();
        const index = savedList.findIndex(value => value == id );
        if (index == -1) {
            savedList.push(id);
            localStorage.setItem('showsListSaved', JSON.stringify(savedList));
            dispatch({
                type: CHANGE_SAVED,
                savedList
            })
        }
    }
}
export const removeShow = (id) => {   
    return dispatch => {
        const savedList = getLocalStorangeShows().filter((value) => value!=id) || [];
        localStorage.setItem('showsListSaved', JSON.stringify(savedList));
        dispatch({
            type: CHANGE_SAVED,
            savedList
        })
    }
}
