import { NextResponse } from "next/server";
import { logRequest } from "./middleware/logger";
import { setFeatureHeader } from "./middleware/setFeatureHeader";
import { isAuthenticated } from "./middleware/auth";

export function middleware(request) {
  const response = NextResponse.next();
  logRequest(request);
  // Apply feature toggle logic
  setFeatureHeader(response);

  // Check authentication
  const unauthenticatedUser = !isAuthenticated(request);
  if (unauthenticatedUser) {
    return response.redirect(new URL("/login", request.url));
  }

  return response;
}

// Apply middleware to relevant paths
export const config = {
  matcher: ["/dashboard/:path*"],
};
