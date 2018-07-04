import { contentActions } from '../actions/content';

const defaultState = {
    scootersList: [],
};

const contentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case contentActions.LOAD_SCOOTERS:
            return {
                ...state,
                scootersList: action.scootersList,
            };
        default: 
            return state;
    }
};

export default contentReducer;
