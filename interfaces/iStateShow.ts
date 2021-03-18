
export interface iShow {
    id                  : number;
    backdrop_path       : string;
    first_air_date      : string;
    name                : string;
    origin_country      : string[];
    original_language   : string;
    original_name       : string;
    overview            : string;
    popularity          : number;
    poster_path         : string;
    vote_average        : string;
    vote_count          : number;
}

export interface iShowResults {
    page            : number;
    results         : iShow[];
    total_pages     : number;
    total_results   : Number;
}

export interface iAllOptionsShowsResult {
    popular     : iShowResults;
    top         : iShowResults;
    today       : iShowResults;
    selected    ?: iShow;
    saved       : number[];
}

export interface actionsShowResult {
    type: string;
    listResult: iShowResults;
    showId: iShow;
    savedList: number[];
}