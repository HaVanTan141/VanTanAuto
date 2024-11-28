let user = null;

export const login = (credentials) => {
  user = { username: credentials.username };
  return user;
};

export const logout = () => {
  user = null;
};

export const getUser = () => user;
