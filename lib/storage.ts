export function set(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
