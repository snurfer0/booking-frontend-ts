import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { deleteBooking, fetchBookings } from '../../store/bookings/actions';
import { Booking } from '../../store/bookings/types';
import { ApplicationState } from '../../store/index';
import BookingList from '../items/BookingList';
import Pagination from '../items/Pagination';

interface Props {
	bookings: Booking[];
	currentPage: number;
	totalPages?: number;
	fetchBookings: (currentPage: number) => void;
	deleteBooking: (id: number) => void;
}

const BookingsPage: React.FC<Props> = ({
	currentPage,
	bookings,
	fetchBookings,
	deleteBooking,
	totalPages,
}) => {
	useEffect(() => {
		if (!bookings.length) {
			fetchBookings(currentPage);
		}
	}, [currentPage, bookings]);

	if (!bookings) return null;

	return (
		<section className='container'>
			<h1>all bookings ({totalPages } pages)</h1>
			<BookingList
				bookings={bookings}
				onDeleteBooking={(id) => deleteBooking(id)}
			/>
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				fetchBookings={(page: number) => fetchBookings(page)}
			/>
		</section>
	);
};

const mapStateToProps = ({ bookings }: ApplicationState) => {
	return {
		bookings: bookings.data,
		currentPage: bookings.currentPage,
		totalPages: bookings.totalPages,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchBookings: (page: number) => {
			dispatch(fetchBookings(page));
		},
		deleteBooking: (id: number) => {
			dispatch(deleteBooking(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingsPage);
