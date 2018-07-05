import { contentActions } from '../actions/content';

const defaultState = {
    scootersList: [],
    filters: {
        model: '',
        minmax: '',
    },
    pagination: 10,
    view: 'list', 
};

const contentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case contentActions.LOAD_SCOOTERS:
            return {
                ...state,
                scootersList: action.scootersList,
            };
        case contentActions.CHANGE_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.name]: action.value,
                },
            };
        case contentActions.CHANGE_VIEW:
            return {
                ...state,
                view: action.view,
            };
        case contentActions.INCREASE_PAGINATION:
            return {
                ...state,
                pagination: state.pagination + 10,
            };
        default: 
            return state;
    }
};

export default contentReducer;
