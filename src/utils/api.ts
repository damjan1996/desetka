import { handleError, createAPIError } from './errorHandling';

interface RequestOptions extends RequestInit {
  timeout?: number;
}

export async function fetchWithTimeout(
  resource: string,
  options: RequestOptions = {}
): Promise<Response> {
  const { timeout = 8000, ...fetchOptions } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, {
      ...fetchOptions,
      signal: controller.signal
    });

    if (!response.ok) {
      throw createAPIError(
        response.status,
        `HTTP error! status: ${response.status}`
      );
    }

    return response;
  } catch (error) {
    throw handleError(error, 'API Request');
  } finally {
    clearTimeout(id);
  }
}