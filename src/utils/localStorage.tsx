export const TOKEN_NAME = 'token';

export const setLocalStorage = ({ name, value }: any) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = ({ name }: any) => {
  return localStorage.getItem(name);
};

export const deleteLocalStorage = ({ name }: any) => {
  return localStorage.removeItem(name);
};
