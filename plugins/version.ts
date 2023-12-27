import json from "../public/json/version.json";

export default defineNuxtPlugin(async (nuxt) => {
  const version = json.version;

  return { provide: { version } };
});
