export const contentActions = {
    FETCH_SCOOTERS: 'FETCH_SCOOTERS',
    FETCH_SCOOTERS_FAILD: 'FETCH_SCOOTERS_FAILD',
    FETCH_SCOOTERS_FAILD_SERVICES: 'FETCH_SCOOTERS_FAILD_SERVICES',
    LOAD_SCOOTERS: 'LOAD_SCOOTERS',
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
