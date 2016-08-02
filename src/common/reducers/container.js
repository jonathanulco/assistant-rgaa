import {TOGGLE, SET_POSITION, SET_POPUP} from '../actions/container';



export const POSITION_RIGHT = 'right';
export const POSITION_LEFT = 'left';
export const POSITION_BOTTOM = 'bottom';

/**
 *
 */
const initialState = {
	open: false,
	position: POSITION_RIGHT,
	popupId: null
};

/**
 *
 */
export default function container(state = initialState, {type, payload}) {
	switch (type) {
		case SET_POSITION:
			return {
				...state,
				position: payload.position
			};

		case TOGGLE:
			return {
				...state,
				open: !state.open
			};

		case SET_POPUP:
			return {
				...state,
				popupId: payload.windowId
			};

		default:
			return state;
	}
}
