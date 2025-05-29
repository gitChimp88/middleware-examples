export function isAuthenticated(request) {
  const token = request.cookies.get("auth-token");
  return Boolean(token);
}
