import { trackEvent } from './analytics';

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public severity: 'error' | 'warning' | 'info' = 'error',
    public metadata?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const errorCodes = {
  NETWORK_ERROR: 'ERR_NETWORK',
  API_ERROR: 'ERR_API',
  AUTH_ERROR: 'ERR_AUTH',
  VALIDATION_ERROR: 'ERR_VALIDATION',
  UNKNOWN_ERROR: 'ERR_UNKNOWN'
} as const;

export const handleError = (error: unknown, context: string) => {
  let appError: AppError;

  if (error instanceof AppError) {
    appError = error;
  } else if (error instanceof Error) {
    appError = new AppError(
      error.message,
      errorCodes.UNKNOWN_ERROR,
      'error',
      { originalError: error }
    );
  } else {
    appError = new AppError(
      'An unexpected error occurred',
      errorCodes.UNKNOWN_ERROR,
      'error',
      { originalError: error }
    );
  }

  // Track error in analytics
  trackEvent('Error', appError.code, `${context}: ${appError.message}`);

  // Log error for debugging
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context}]`, appError);
  }

  return appError;
};

export const createAPIError = (status: number, message: string) => {
  return new AppError(
    message,
    errorCodes.API_ERROR,
    'error',
    { status }
  );
};