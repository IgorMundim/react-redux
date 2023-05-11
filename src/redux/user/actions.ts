import UserActionTypes from '@/redux/user/action-types';
import { UserProps } from '@/redux/user/reducer';

export const loginUser = (payload: UserProps) => ({
  type: UserActionTypes.LOGIN,
  payload,
});
