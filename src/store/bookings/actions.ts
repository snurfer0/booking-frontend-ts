import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../index';
import { Booking, BookingActionTypes } from './types';

export type AppThunk = ActionCreator<
	ThunkAction<void, ApplicationState, null, Action<string>>
>;

const api: AxiosInstance = axios.create({
	baseURL: 'http://localhost:8000/api/',
});

export const deleteBooking: AppThunk =
	(id: number) =>
	async (dispatch: Dispatch): Promise<Action> => {
        try {
			let response: AxiosResponse<any> = await api.delete<any>(
				`/bookings/delete/${id}`,
			);

			if (response && response.status === 202) {
				return dispatch({
					type: BookingActionTypes.DELETE_BOOKING,
					payload: id,
				});
			} else {
				return dispatch({
					type: BookingActionTypes.ERROR,
					payload: {
						status: response.status,
						message: response.data,
					},
				});
			}
		} catch (error) {
			return dispatch({
				type: BookingActionTypes.ERROR,
				payload: error,
			});
		}
	};

export const fetchBookings: AppThunk =
	(page: number) =>
	async (dispatch: Dispatch): Promise<Action> => {
		try {
			dispatch({
				type: BookingActionTypes.FETCH_REQUEST,
			});

			let response: AxiosResponse<any> = await api.get<Booking[]>(
				`bookings/${page}`,
			);

			if (response && response.status === 200) {
				return dispatch({
					type: BookingActionTypes.FETCH_SUCCESS,
					payload: { data: response.data.bookings, page: page, pages: response.data.pages },
				});
			} else {
				return dispatch({
					type: BookingActionTypes.ERROR,
					payload: {
						status: response.status,
						message: response.data,
					},
				});
			}
		} catch (error) {
			return dispatch({
				type: BookingActionTypes.ERROR,
				payload: error,
			});
		}
	};
