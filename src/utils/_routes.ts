import BookingsPage from '../components/pages/BookingsPage';

interface Route {
	component: any;
	path: string;
	exact: boolean;
}

export const _routes: Route[] = [
	{
		component: BookingsPage,
		path: '/',
		exact: true,
	},
];
