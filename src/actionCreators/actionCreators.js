import * as ACTIONS from './../actions';

export const addNewTrip = (trip) => ({type: ACTIONS.ADD_NEW_TRIP, payload: trip});
export const addingNewTripSucceded = () => ({type: ACTIONS.ADD_NEW_TRIP_SUCCEDED});
export const addingNewTripFailed = () => ({type: ACTIONS.ADD_NEW_TRIP_FAILED});