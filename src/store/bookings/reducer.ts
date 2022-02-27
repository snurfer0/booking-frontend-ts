import { AnyAction, Reducer } from 'redux';
import { BookingActionTypes, BookingState, Booking } from './types';

const initialState: BookingState = {
	data: [],
	currentPage: 1,
	loading: false,
	errors: undefined,
};

const reducer: Reducer<BookingState> = (
	state = initialState,
	action: AnyAction,
) => {
	switch (action.type) {
		case BookingActionTypes.FETCH_REQUEST:
			return { ...state, loading: true };

		case BookingActionTypes.FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload.data,
				currentPage: action.payload.page,
			};
		case BookingActionTypes.DELETE_BOOKING:
			return {
				...state,
                data: state.data.filter((booking: Booking) => {
                    return booking.id !== action.payload
                })
			};
		case BookingActionTypes.ERROR:
			return {
				...state,
				errors: action.payload,
			};
		default: {
			return state;
		}
	}
};

export { reducer as BookingReducer };
