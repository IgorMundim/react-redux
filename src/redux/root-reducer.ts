import { combineReducers } from 'redux';

import cartReducer from '@/redux/cart/reducer';
import userReducer from '@/redux/user/reducer';

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
