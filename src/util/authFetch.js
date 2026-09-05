// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiBaseUrl = "http://localhost:8080";

export async function authFetch(path, options = {}) {
  const headers = new Headers(options.headers || {});

  const isFormData = options.body instanceof FormData;

  if (options.body && !isFormData && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });
}
