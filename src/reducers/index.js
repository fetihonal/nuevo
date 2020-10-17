import { combineReducers } from 'redux';
import Filters from './filters.reducer';
const reducers = combineReducers({
    data: [],
    filters: Filters,
});

export default reducers;