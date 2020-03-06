import {
	SET_ISLOGGED_IN
} from './actionTypes';

import api from "../../api/"



export const isLoggedIn = (boolean)  => {
	return {
		type: SET_ISLOGGED_IN,
		payload: boolean
	};

};


