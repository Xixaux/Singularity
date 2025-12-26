import ky, { KyInstance, Options } from 'ky';

export const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${process.env.NEXT_PUBLIC_PORT || 3001}`
    : process.env.NEXT_PUBLIC_BASE_URL || '/';

// Custom error class to preserve status and response data
export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

let globalHeaders: Record<string, string> = {};

// Main Ky instance
export const api: KyInstance = ky.create({
  prefixUrl: API_BASE_URL, // Ky will prepend this to all requests
  timeout: 30000,
  retry: {
    limit: 2,
    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // Apply global headers
        Object.entries(globalHeaders).forEach(([key, value]) => {
          request.headers.set(key, value);
        });

        // Automatically set Content-Type for requests with JSON body
        if (request.body && typeof request.body === 'string') {
          try {
            JSON.parse(request.body);
            request.headers.set('Content-Type', 'application/json');
          } catch {
            // Not JSON, leave as-is (e.g., FormData)
          }
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (!response.ok) {
          let data: unknown = null;
          try {
            data = await response.json();
          } catch {
            data = await response.text();
          }

          throw new ApiError(
            `API Error: ${response.status}`,
            response.status,
            data
          );
        }

        return response;
      },
    ],
  },
  // Automatically parse JSON responses
  parseJson: (text) => JSON.parse(text),
});

// Functions to manage global headers
export const setGlobalHeaders = (headers: Record<string, string>) => {
  globalHeaders = { ...globalHeaders, ...headers };
};

export const removeGlobalHeaders = (headerKeys: string[]) => {
  headerKeys.forEach((key) => {
    delete globalHeaders[key];
  });
};

export const getGlobalHeaders = (): Readonly<Record<string, string>> => {
  return globalHeaders;
};

export default api;