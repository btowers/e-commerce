export function isAuthenticated() {
  return (state) => !!state.token;
}
