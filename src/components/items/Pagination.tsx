import React from 'react';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
	currentPage: number;
	totalPages?: number;
	fetchBookings: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
	currentPage,
	fetchBookings,
	totalPages,
}) => {
	return (
		<div className='page-numbers-container'>
			<button
				onClick={() => fetchBookings(currentPage - 1)}
				className='page-button'
				disabled={currentPage === 1 ? true : false}
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
				disabled={currentPage === totalPages ? true : false}
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
