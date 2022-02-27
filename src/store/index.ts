import {
	AnyAction,
	applyMiddleware,
	combineReducers,
	compose,
	createStore,
	StoreEnhancer,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import booking's saga
import { BookingReducer } from './bookings/reducer';
import { BookingState } from './bookings/types';
// redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export interface ApplicationState {
	bookings: BookingState;
}

const rootReducer = combineReducers({
	bookings: BookingReducer,
});

export default function configureStore() {
	const middlewareEnhancer: StoreEnhancer<{ dispatch: AnyAction }, {}> =
		applyMiddleware(thunkMiddleware);

	const composedEnhancers: StoreEnhancer =
		composeWithDevTools(middlewareEnhancer);

	const store = createStore(rootReducer, composedEnhancers);

	return store;
}
