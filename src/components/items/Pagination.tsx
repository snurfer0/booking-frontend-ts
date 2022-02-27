import React from 'react';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
	currentPage: number;
	fetchBookings: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, fetchBookings }) => {
	return (
		<div className='page-numbers-container'>
			<button
				onClick={() => fetchBookings(currentPage - 1)}
				className='page-button'
			>
				<FontAwesomeIcon
					className='locationDotIcon'
					icon={faArrowLeft}
				/>
			</button>
			<div className='current-page-item'>{currentPage}</div>
			<button
				onClick={() => fetchBookings(currentPage + 1)}
				className='page-button'
			>
				<FontAwesomeIcon
					className='locationDotIcon'
					icon={faArrowRight}
				/>
			</button>
		</div>
	);
};

export default Pagination;
