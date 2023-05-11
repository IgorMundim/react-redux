import UserActionTypes from '@/redux/user/action-types';

const initialState = {
  currentUser: null,
};
export interface UserProps {
  firstName: string;
  lastName: string;
}
interface UserAction {
  type: string;
  payload: UserAction;
}
const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
export default userReducer;
