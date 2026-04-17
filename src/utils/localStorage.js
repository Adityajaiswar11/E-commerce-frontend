// ─── Auth helpers ────────────────────────────────────────────────────────────

/** Read the JWT token stored after login */
export const getToken = () => localStorage.getItem("token") ?? null;

/** Read the user object stored after login */
export const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

/** Returns true when a token is present */
export const isLoggedIn = () => Boolean(getToken());

/**
 * Persist token + user after a successful login.
 * @param {string} token
 * @param {object} user
 */
export const setAuth = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

/** Remove all auth data (logout) */
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
