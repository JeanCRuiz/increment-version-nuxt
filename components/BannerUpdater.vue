<template>
  <v-banner
    v-if="show"
    lines="one"
    icon="mdi-update"
    class="mt-5 px-4 py-3 banner"
    :class="{ 'animation': show }"
    max-width="934"
    position="absolute"
    rounded
  >
    <v-banner-text tag="p">
      <strong>Actualiza la página.</strong> Hemos mejorado la funcionalidad para una experiencia óptima.
    </v-banner-text>

    <template #actions>
      <v-btn color="white" elevation="1" @click="hardReload">
        Actualizar
      </v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      appVersion: this.$version,
      snapKiller: null
    }
  },
  mounted () {
    const firebaseVersionPath = this.$doc(this.$db, 'version', '2-test')

    this.snapKiller = this.$onSnapshot(firebaseVersionPath, (snap) => {
      const version = snap.data().code

      const firebaseBaseVersionNum = Number(version)
      const appVersionNum = Number(this.appVersion)

      if (firebaseBaseVersionNum > appVersionNum) {
        this.show = true
      }
    })
  },
  methods: {
    hardReload () {
      window.location.reload(true)
      this.show = false
    }
  }
}
</script>
