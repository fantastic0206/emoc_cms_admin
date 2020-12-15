const JWT_STORAGE_NAME = "wenuzzle-jwt";

export const getJwt = () => localStorage.getItem(JWT_STORAGE_NAME);
export const setJwt = (token) => localStorage.setItem(JWT_STORAGE_NAME, token);
export const clearJwt = () => localStorage.removeItem(JWT_STORAGE_NAME);
export const authHeader = () => {
  const token = getJwt();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};
