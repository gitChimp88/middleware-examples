export function logRequest(req) {
  console.log(`Request logger: [${req.method}] ${req.nextUrl.pathname}`);
}
