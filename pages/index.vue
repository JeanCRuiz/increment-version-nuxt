<template>
  <v-container fluid class="bg-teal grid-container">
    <!-- <h1>Version actual "{{ version }}"</h1> -->
    <h1>Version actual "{{ version }}"</h1>
    <span>by: (LugoTech) Jean Ruiz 👨‍💻</span>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      version: this.$version
      // latestRealease: null
    }
  }
  // async mounted () {
  //   this.latestRealease = await this.getLatestGithubRelease()
  // },
  // methods: {
  //   async getLatestGithubRelease () {
  //     const response = await fetch('https://api.github.com/repos/jeancruiz/increment-version-nuxt/releases/latest')
  //     const data = await response.json()
  //     return data.tag_name
  //   }
  // }
}
</script>
<style  scoped>
.grid-container {
    display: grid;
    min-height: 100vh;
    place-items: center;
}
</style>
