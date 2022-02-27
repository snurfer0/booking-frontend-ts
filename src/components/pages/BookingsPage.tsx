import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchBookings, deleteBooking } from '../../store/bookings/actions';
import { Booking } from '../../store/bookings/types';
import { ApplicationState } from '../../store/index';
import BookingList from '../items/BookingList';
import Pagination from '../items/Pagination';

interface Props {
	bookings: Booking[];
	currentPage: number;
	fetchBookings: (currentPage: number) => void;
	deleteBooking: (id: number) => void;
}

const BookingsPage: React.FC<Props> = ({
	currentPage,
	bookings,
    fetchBookings,
    deleteBooking
}) => {
	useEffect(() => {
		fetchBookings(currentPage);
	}, [currentPage]);

	if (!bookings) return <></>;

	return (
		<section className='container'>
			<h1>all bookings</h1>
			<BookingList
				bookings={bookings}
				onDeleteBooking={(id) => deleteBooking(id)}
			/>
			<Pagination
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
