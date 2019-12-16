import {userTypeAction} from './userTypeaction';

const setCurrentUser = (user) => ({
    type: userTypeAction.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser;