export interface User {
	email: string;
}

export interface Address {
    venueName: string;
    country: string;
    city: string;
    address: string;
    zip: string;
}

export interface Event {
	title: string;
	description: string;
	startTime: Date;
	endTime: Date;
	users: User[];
}

export interface Booking {
    id: number;
    totalPrice: number;
    user: User;
    address: Address;
    event: Event;
}

export enum BookingActionTypes {
	FETCH_REQUEST = '@@booking/FETCH_REQUEST',
	FETCH_SUCCESS = '@@booking/FETCH_SUCCESS',
	ERROR = '@@booking/ERROR',
	DELETE_BOOKING = '@@booking/DELETE_BOOKING',
}

export interface BookingState {
	readonly data: Booking[];
	readonly loading: boolean;
	readonly errors?: string;
	readonly currentPage: number;
	readonly totalPages?: number;
}
