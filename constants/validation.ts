const VALID_PASSWORD = "1234";

export const validatePassword = (password: string): boolean => {
  return password === VALID_PASSWORD;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};