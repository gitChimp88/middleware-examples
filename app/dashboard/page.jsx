import { headers } from "next/headers";

export default async function Dashboard() {
  const headersList = await headers();
  const featureFlag = headersList.get("x-feature-header");

  console.log("Feature flag:", featureFlag);
  const showNewHeader = featureFlag === "new";

  return (
    <main>
      {showNewHeader ? (
        <h1 className="text-4xl font-bold text-green-600">
          New dashboard header
        </h1>
      ) : (
        <h1 className="text-2xl">Dashboard</h1>
      )}
      <p>Welcome to the dashboard!</p>
    </main>
  );
}
