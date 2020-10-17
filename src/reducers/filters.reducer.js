import {
    SEARCH_BY,
    FILTER_COMPANY_NAME,
    FILTER_AREA,
    SEARCH_BY_JOB
} from '../constant/actionTypes';

const filtersReducerDefaultState = {
    searchBy:"",
    company: "",
    area:"",
    job:""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_COMPANY_NAME:
            return {
                ...state,
                company: action.company
            };
        case SEARCH_BY:
            return {
                ...state,
                searchBy: action.search
            };
        case SEARCH_BY_JOB:
            return {
                 ...state,
                job: action.job
            };
        case FILTER_AREA: 
            return {
                ...state,
                area: action.area
            };
        default:
            return state;
    }
}

export default filtersReducer;