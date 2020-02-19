import { userConstants } from './userConstant';

const setCurrentUser = user => ({
  type: userConstants.setCurrentUser,
  payload: user
});

export default setCurrentUser;
