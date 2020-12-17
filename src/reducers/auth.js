// storing the user id state as an object
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
    return {
      // if login then state object is set to user id
      uid: action.uid
    };
    case 'LOGOUT':
    // if logout then the user id is set to empty object
      return {};
    default:
    // the default does not change user id.
      return state;
  }
};
