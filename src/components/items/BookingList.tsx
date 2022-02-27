import _ from 'lodash';
import React from 'react';
import { Booking as BookingType } from '../../store/bookings/types';
import Booking from './Booking';

interface Props {
	bookings: BookingType[];
    onDeleteBooking: (id: number) => void;
}

const BookingList: React.FC<Props> = ({ bookings, onDeleteBooking }) => {

	return (
		<>
			{_.chunk(bookings, 2).map((chunk, index) => {
				return (
					<div key={index} className='row'>
						{chunk.map((booking, index) => (
							<Booking
								key={index}
								booking={booking}
								onDeleteBooking={onDeleteBooking}
							/>
						))}
					</div>
				);
			})}
		</>
	);
};

export default BookingList;
