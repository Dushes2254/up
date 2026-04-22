import { Middleware } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User } from '../types/user';
import { userActions } from '../slice/userSlice';

export const userLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (userActions.initAuthData.match(action)) {
    const raw = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (raw) {
      try {
        const user = JSON.parse(raw) as User;
        store.dispatch(userActions.setAuthData(user));
      } catch {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      }
    }
  }

  if (userActions.setAuthData.match(action)) {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
  }

  if (userActions.logout.match(action)) {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }

  return result;
};
