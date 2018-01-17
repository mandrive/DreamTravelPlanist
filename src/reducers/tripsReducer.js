import * as ACTIONS from './../actions';

const initialState = {
    items: [{
        id: 1,
        name: 'trip1'
    }, {id: 2,
        name: 'trip2'},{
        id: 3,
        name: 'trip3'}],
    loading: false
}

export const tripsReducer = (state = initialState, action) => {
    let newState = null;
    switch (action.type) {
        case (ACTIONS.ADD_NEW_TRIP):
            newState = { items: [...state.items, action.payload], loading: true}
            break;
        case (ACTIONS.ADD_NEW_TRIP_FAILED):
        case (ACTIONS.ADD_NEW_TRIP_SUCCEDED):
            newState = {...state, loading: false}
            break;
        default:
            newState = state;
    }

    return newState;
}