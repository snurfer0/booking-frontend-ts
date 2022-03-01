import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Booking as BookingType } from '../../store/bookings/types';
import {
	formatDate,
	formatUserEmailList,
	getDate,
	getMonthShort,
	getTime,
} from '../../utils/_formatters';

interface Props {
	booking: BookingType;
	onDeleteBooking: (id: number) => void;
}

const Booking: React.FC<Props> = ({ booking, onDeleteBooking }) => {
	return (
		<div className='col-xl-6'>
			<div className='d-flex flex-row card'>
				<div className='date col-3'>
						<time>
							<span>{getDate(booking.event.startTime)}</span>
							<span>
								{getMonthShort(booking.event.startTime)}
							</span>
						</time>
						<p>
							<a
								href='#'
								data-tooltip={formatUserEmailList(
									booking.event.users,
								)}
							>
								See who's comming
							</a>
						</p>
				</div>
				<div className='card-cont col-9'>
					<div className='card-title'>
						<h3>
							#{booking.id} {booking.event.title},{' '}
							{booking.address.venueName}
						</h3>
					</div>
					<div className='description'>
						{booking.event.description}
					</div>
					<div className='host'>HOST: {booking.user.email}</div>
					<div className='even-date'>
						<i className='fa fa-calendar'></i>
						<time>
							<p>{formatDate(booking.event.startTime)}</p>
							<p>
								{getTime(booking.event.startTime)} -{' '}
								{getTime(booking.event.endTime)}
							</p>
						</time>
					</div>

					<div className='row'>
						<div className='even-info col-7 my-auto'>
							<FontAwesomeIcon
								className='locationDotIcon'
								icon={faLocationDot}
							/>
							{booking.address.address}&nbsp;{' '}
							{booking.address.zip}
							&nbsp; {booking.address.city}
							{'-'}
							{booking.address.country}
						</div>
						<div className='col-1'></div>
						<div className='col-4'>
							<button
								className='grow_on_hover'
								onClick={() => onDeleteBooking(booking.id)}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
