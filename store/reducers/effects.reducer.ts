import { iActionEffects, iModal, StateEffects } from "../../interfaces/iStateEffects";
import types from '../types/';


export const initStateEffects: StateEffects = {
    loading: false,
    modals: {
        body: null,
        status: false,
        title:'mi modal'
    },
    tasks: {
        time: 5,
        title: 'mi alerta',
        status:false
    }
}

const returnModal = (value:iModal ):iModal => {
    return {
        title: value.title,
        body: value.body,
        status:value.status
    }
};

export const effectsState = ( state=initStateEffects,actions:iActionEffects ):StateEffects => {
    switch (actions.type) {
        case types.effectsTypes.OPEN_MODAL:
            return {
                ...state,
                modals: {
                    status  : actions.value['status'],
                    body    : actions.value['body'],
                    title   : actions.value['title'],
                }
            } ;
        case types.effectsTypes.OPEN_TASK:
            return {
                ...state,
                tasks: {
                    status  : actions.value['status'],
                    time    : actions.value['time'] | 5,
                    title   :actions.value['title'],
                }
            }
        default:
            break;
    }

    return state;
}

