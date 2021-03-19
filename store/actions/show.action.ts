import { iShowResults,iShow } from "../../interfaces/iStateShow";
import { getLocalStorangeShows } from "../reducers/shows.reducer";
import {
    CHANGE_SAVED,
    GET_SHOWS_ID,
    GET_SHOWS_POPULAR,
    GET_SHOWS_TODAY,
    GET_SHOWS_TOP_RATE,
    REMOVE_SHOWS_ID,
} from "../types/shows.types";


/**
 * 
 * actions para llenar show favoritos obtenidos desde un api.
 * @param status 
 * @param data
 * 
 */
export const setFavoriteShow = ({ status, data }) => {
    return async dispatch => {
        status ==200 ? dispatch({type:GET_SHOWS_POPULAR,listResult:data}) : null;
    }
}/**
 * 
 * actions para llenar show top obtenidos desde un api.
 * @param status 
 * @param data
 * 
 */
export const setTopShow = ({status,data}) => {
    return async dispatch => {
        status ==200 ? dispatch({type:GET_SHOWS_TOP_RATE,listResult:data}) : null;
    }
}/**
 * 
 * actions para llenar show del dia obtenidos desde un api.
 * @param status 
 * @param data
 * 
 */
export const setTodayShow = ({status,data}) => {
    return async dispatch => {
        status ==200 ? dispatch({type:GET_SHOWS_TODAY,listResult:data}) : null;
    }
}
/**
 * 
 * agrega el detalle del show seleccionado,
 * @param data : datos del shoe a mostrar en el detalle.
 */
export const addSelected = (data) => {
    
    return dispatch => {
        dispatch({
            type: GET_SHOWS_ID,
            showId:data,
        });
    }
}
/**
 * 
 * Elimina el detalle del show seleccionado.
 */
export const removeSelected = () => {
    
    return dispatch => {
        dispatch({
            type: REMOVE_SHOWS_ID,
        });
    }
}
/**
 * @param id : parametro que identifica el show agregado
 * agrega los datos a la lista que se guarda de forma local en el navegador
 */
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
/**
 * 
 * @param id : parametro que identifica el show agregado
 * remuve los datos a la lista que se guarda de forma local en el navegador
 */
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
/**
 * 
 * @param x 
 * @param y 
 * @returns -1| 1
 */
const functionOrdenAlfabetico = (x:iShow, y:iShow) => x.name > y.name ? -1 : 1;
const functionOrdenVoto = (x:iShow, y:iShow) => x.vote_average > y.vote_average ? -1 : 1;

/**
 * oerdena el listado de show de forma alfabetica.
 * @param data : datos de show favorito a ordenar.
 * @returns 
 */
export const orderAlfabeticoFavoriteShow = (data:iShowResults) => {
    const lista = data.results.sort(functionOrdenAlfabetico);
    return dispatch => dispatch({ type: GET_SHOWS_POPULAR, listResult: lista });
}
/**
 * oerdena el listado de show por votos.
 * @param data : datos de show favorito a ordenar.
 * @returns 
 */
export const orderVotosFavoriteShow = (data:iShowResults) => {
    const lista = data.results.sort(functionOrdenVoto);
    return dispatch => dispatch({ type: GET_SHOWS_POPULAR, listResult: lista });
}
/**
 * oerdena el listado de show de forma alfabetica.
 * @param data : datos de show top a ordenar.
 * @returns 
 */
export const orderAlfabeticoTopShow = (data:iShowResults) => {
    const lista = data.results.sort(functionOrdenAlfabetico);
    return dispatch => dispatch({ type: GET_SHOWS_TOP_RATE, listResult: lista });
}
/**
 * oerdena el listado de show por votos.
 * @param data : datos de show top a ordenar.
 * @returns 
 */
export const orderVotosTopShow = (data:iShowResults) => {
    const lista = data.results.sort(functionOrdenVoto);
    return dispatch => dispatch({ type: GET_SHOWS_TOP_RATE, listResult: lista });
}
/**
 * oerdena el listado de show de forma alfabetica.
 * @param data : datos de show del dia a ordenar.
 * @returns 
 */
export const orderAlfabeticoTodayShow = (data:iShowResults) => {
    const lista = data.results.sort(functionOrdenAlfabetico);
    return dispatch => dispatch({ type: GET_SHOWS_TODAY, listResult: lista });
}
/**
 * oerdena el listado de show por votos.
 * @param data : datos de show del dia a ordenar.
 * @returns 
 */
export const orderVotosTodayShow = (data:iShowResults) => {
    const lista = data.results.sort(functionOrdenVoto);
    return dispatch => dispatch({ type: GET_SHOWS_TODAY, listResult: lista }); 
}
