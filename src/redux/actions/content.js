export const contentActions = {
    FETCH_SCOOTERS: 'FETCH_SCOOTERS',
};

export const fetchScooters = () => {
    return {
        type: contentActions.FETCH_SCOOTERS,
    };
};
