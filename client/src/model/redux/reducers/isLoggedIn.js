import { SET_ISLOGGED_IN } from '../actionTypes';

const initialState = {
	isLoggedIn:{}
};



const isLoggedIn =  (state = initialState, action)=> {
	const { payload, type } = action;

	switch (type) {
        case SET_ISLOGGED_IN: {
         
			return {
				...state,
				isLoggedIn: payload
			};
		}
     
		default:
			return state;
	}
}

export default isLoggedIn;
