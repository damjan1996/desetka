import { v4 as uuidv4 } from 'uuid';

// CSRF token storage
let csrfToken: string | null = null;

// Generate a new CSRF token
export const generateCsrfToken = (): string => {
  csrfToken = uuidv4();
  return csrfToken;
};

// Validate a CSRF token
export const validateCsrfToken = (token: string): boolean => {
  return token === csrfToken;
};

// Get the current CSRF token
export const getCsrfToken = (): string => {
  if (!csrfToken) {
    return generateCsrfToken();
  }
  return csrfToken;
};