/**
 *
 */
export const SET_POSITION = 'common/panel/SET_POSITION';
export const TOGGLE_FOLD = 'common/panel/TOGGLE_FOLD';
export const SET_PAGE_INFO = 'common/panel/SET_PAGE_INFO';



/**
 *
 */
export const setPosition = (position) => ({
	type: SET_POSITION,
	payload: position
});

/**
 *
 */
export const toggleFold = (toggle) => ({
	type: TOGGLE_FOLD,
	payload: toggle
});

/**
 *
 */
export const setPageInfo = (data) => ({
	type: SET_PAGE_INFO,
	payload: data
});
