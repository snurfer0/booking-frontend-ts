import React from 'react';
import { Booking as BookingType } from '../../store/bookings/types';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	getDate,
	getMonthShort,
	getTime,
	formatDate,
	formatUserEmailList,
} from '../../utils/_formatters';

interface Props {
    booking: BookingType;
    onDeleteBooking: (id: number) => void;
}

const Booking: React.FC<Props> = ({ booking, onDeleteBooking }) => {
	return (
		<article className='card fl-left'>
			<section className='date'>
				<time>
					<span>{getDate(booking.event.startTime)}</span>
					<span>{getMonthShort(booking.event.startTime)}</span>
				</time>
			</section>
			<section className='card-cont'>
				<div className='card-title'>
					<h3>
						#{booking.id} {booking.event.title},{' '}
						{booking.address.venueName}
					</h3>
					<h3>{booking.totalPrice}$</h3>
				</div>
				<p className='description'>{booking.event.description}</p>
				<p className='host'>HOST: {booking.user.email}</p>

				<div className='even-date'>
					<i className='fa fa-calendar'></i>
					<time className='time-container'>
						<span>
							<h2>{formatDate(booking.event.startTime)}</h2>
						</span>
						<span>
							<h2>
								{getTime(booking.event.startTime)} -{' '}
								{getTime(booking.event.endTime)}
							</h2>
						</span>
					</time>
				</div>
				<p>
					<a
						href='#'
						data-tooltip={formatUserEmailList(booking.event.users)}
					>
						See who's comming
					</a>
				</p>
				<div className='even-info'>
					<FontAwesomeIcon
						className='locationDotIcon'
						icon={faLocationDot}
					/>
					{booking.address.address}&nbsp; {booking.address.zip}&nbsp;{' '}
					{booking.address.city}
					{'-'}
					{booking.address.country}
				</div>

				<button
					className=' grow_on_hover'
					onClick={() => onDeleteBooking(booking.id)}
				>
					Delete
				</button>
			</section>
		</article>
	);
};

export default Booking;
