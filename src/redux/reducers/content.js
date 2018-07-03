import { contentActions } from '../actions/content';

const defaultState = {
    scootersList: [],
};

const contentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case contentActions.FETCH_SCOOTERS:
            return {
                ...state,
            };
        default: 
            return state;
    }
};

export default contentReducer;
