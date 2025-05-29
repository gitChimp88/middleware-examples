# Contentful Next.js middleware example

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This application consists of a login page and a dashboard, setup for the purpose of demonstrating the use of Next.js middleware.

Middleware tasks are located under the middleware directory in the root of the project, the middleware logic is imported into the main `middleware.js` file to be used.

1. The example logs a request for the path of `/dashboard`
2. Sets a feature header which allows the user to see a new header
3. Checks if the user is authenticated and redirects to `/login` if not

You can comment out the authentication check in `middleware.js` to gain access to the dashboard.
