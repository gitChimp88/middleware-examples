import { headers } from "next/headers";

export default async function Dashboard() {
  const headersList = await headers();
  const featureFlag = headersList.get("x-feature-header");

  const showNewFeature = featureFlag === "new";

  return (
    <main className="p-4">
      <h1 className="text-2xl">Dashboard</h1>
      <p>Welcome to the dashboard!</p>

      {showNewFeature && (
        <p className="mt-2 text-green-600 font-medium">
          You’re seeing a new feature enabled by our feature flag!
        </p>
      )}
    </main>
  );
}
