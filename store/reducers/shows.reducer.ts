import { actionsShowResult, iAllOptionsShowsResult, iShowResults } from "../../interfaces/iStateShow";
import types from '../types/';


export const initStateShows:iShowResults = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
}  

export const getLocalStorangeShows = () => {
    if (typeof window !== "undefined") {
        const listSaved = localStorage.getItem('showsListSaved');
        !listSaved && localStorage.setItem('showsListSaved', '[]');
        const sto = JSON.parse( localStorage.getItem('showsListSaved'));
        return sto;
    }
    return [];
}
export const initialStateShowResult: iAllOptionsShowsResult = {
    popular: initStateShows,
    today: initStateShows,
    top: initStateShows,
    saved:getLocalStorangeShows(),
    selected:null
    
};

export const showResult = (state = initialStateShowResult, actions: actionsShowResult): iAllOptionsShowsResult => {
    
    switch (actions.type) {
        case types.showResult.GET_SHOWS_POPULAR:
            return { ...state, popular: actions.listResult}    
        case types.showResult.GET_SHOWS_TODAY:
            return {...state,today: actions.listResult}        
        case types.showResult.GET_SHOWS_TOP_RATE:
            return {...state,top: actions.listResult}
        case types.showResult.GET_SHOWS_ID:
            return {...state,selected:actions.showId}
        case types.showResult.REMOVE_SHOWS_ID:
            return {...state,selected:null}
        case types.showResult.CHANGE_SAVED:            
            return { ...state, saved: actions.savedList };
        default: return state;
    }
}
