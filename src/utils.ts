import { ICurrentUser } from './types';

export const getDataFromLS = (collection: string) => {
  const data = localStorage.getItem(collection);
  if (data) return JSON.parse(data);
  return [];
};

export const getCurrentUserFromSS = () => {
  const data = sessionStorage.getItem('currentLoggedIn');
  if (data) return JSON.parse(data);
  return '';
};

export const addCurentUserInSS = (user: ICurrentUser) => {
  sessionStorage.setItem('currentLoggedIn', JSON.stringify(user));
};
