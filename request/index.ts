const headers = { "Content-Type": "application/json" };

export async function latestRelease() {
  const resp = await fetch("/ytmusic/api/releases/latest/", {
    method: "GET",
    headers,
    // https://nextjs.org/docs/app/building-your-application/caching
    cache: "no-store",
  });
  return await resp.json();
}
