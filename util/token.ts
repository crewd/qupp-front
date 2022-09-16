export const tokenStore = {
  set: (key: string, value: string) => {
    if (!value) {
      return;
    }
    localStorage.setItem(key, value);
  },
  get: (name: string) => localStorage.getItem(name),
  get isLoggedIn() {
    if (localStorage.length > 0) {
      return true;
    }
    return false;
  },
};
