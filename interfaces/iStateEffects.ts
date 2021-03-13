
export interface iModal
{
    status  : boolean;
    title   : string;
    body    : any;
};

export interface iTask {
    title   : string;
    time    ?: number;
    status  : boolean;
}

export interface iActionEffects{
    type    : string;
    value   : boolean | iModal | iTask;
}
export interface  StateEffects {
    loading : boolean;
    modals  : iModal;
    tasks   : iTask;
}