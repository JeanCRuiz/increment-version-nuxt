import json from '../public/json/version.json'

export default defineNuxtPlugin(() => {
  const version = json.version

  return { provide: { version } }
})
