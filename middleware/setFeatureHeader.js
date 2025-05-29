export function setFeatureHeader(response) {
  response.headers.set("x-feature-header", "new");
}
