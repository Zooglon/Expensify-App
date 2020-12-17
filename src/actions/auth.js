import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

// sign in requires a call to googleAuthProvider
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};export const logout = () => ({
  type: 'LOGOUT'
});

// sign out requires no actions
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}
