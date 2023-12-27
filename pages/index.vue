<template>
    <v-container fluid class="bg-teal grid-container">
        <h1>Version actual {{ version }}</h1>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            version: this.$version
        }
    }
}
</script>
<style  scoped>
.grid-container {
    display: grid;
    min-height: 100vh;
    place-items: center;
}
</style>