import { User } from "../store/bookings/types";

export const formatDate = (date: Date) => {
	let options: any = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	let _date = new Date(date);
	return _date.toLocaleDateString('en-US', options);
};

export const getTime = (date: Date) => {
	date = new Date(date);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? 0 + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
};

export const getMonthShort = (date: Date) => {
	date = new Date(date);
	return date.toLocaleString('en-us', { month: 'short' });
};

export const getDate = (date: Date) => {
	date = new Date(date);
	return date.getDate();
};

export const formatUserEmailList = (users: User[]) => {
	let emails = users.map((u) => u.email);
	let returnStr = '';
	emails.forEach((email, index) => {
		if (index === emails.length - 1) {
			return (returnStr += email + '\n');
		}
		return (returnStr += email + ' | \n');
	});

	return returnStr;
};
