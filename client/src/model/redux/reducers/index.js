import { combineReducers } from "redux";
import isLoggedIn from './isLoggedIn';



const rootReducer = combineReducers({isLoggedIn})


export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;