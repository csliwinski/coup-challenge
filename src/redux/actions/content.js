export const contentActions = {
    FETCH_SCOOTERS: 'FETCH_SCOOTERS',
    FETCH_SCOOTERS_FAILD: 'FETCH_SCOOTERS_FAILD',
    FETCH_SCOOTERS_FAILD_SERVICES: 'FETCH_SCOOTERS_FAILD_SERVICES',
    LOAD_SCOOTERS: 'LOAD_SCOOTERS',
    CHANGE_VIEW: 'CHANGE_VIEW',
    CHANGE_FILTER: 'CHANGE_FILTER',
    INCREASE_PAGINATION: 'INCREASE_PAGINATION',
};

export const fetchScooters = () => {
    return {
        type: contentActions.FETCH_SCOOTERS,
    };
};

export const fetchScootersFaild = () => {
    return {
        type: contentActions.FETCH_SCOOTERS_FAILD,
    };
};

export const fetchScootersFaildServices = () => {
    return {
        type: contentActions.FETCH_SCOOTERS_FAILD_SERVICES,
    };
};

export const loadScooters = (scootersList) => {
    return {
        type: contentActions.LOAD_SCOOTERS,
        scootersList,
    };
};

export const changeView = (view) => {
    return {
        type: contentActions.CHANGE_VIEW,
        view,
    };
};

export const changeFilter = (name, value) => {
    return {
        type: contentActions.CHANGE_FILTER,
        name,
        value,
    };
};

export const increasePagination = () => {
    return {
        type: contentActions.INCREASE_PAGINATION,
    };
};
