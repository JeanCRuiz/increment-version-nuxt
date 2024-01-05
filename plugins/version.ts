// import json from '../public/json/version.json'

export default defineNuxtPlugin(async () => {
  // const version = '1.0.0'

  async function getLatestVersion () {
    const response = await fetch('https://api.github.com/repos/jeancruiz/increment-version-nuxt/releases/latest')
    const data = await response.json()
    return data.tag_name
  }

  const version = await getLatestVersion()

  return { provide: { version } }
})
