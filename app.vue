<template>
  <NuxtLayout>
    <v-app>
      <BannerUpdater />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<style lang="scss">
.banner {
  z-index: 9997 !important;
  background-color: #FFE6C2;
  left: 0;
  right: 0;
  margin-inline: auto;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);




  .v-banner-text {
    font-size: 1.125rem;
    font-style: normal;
    padding-inline-end: 0;
  }

  .v-banner__prepend {
    margin-inline-end: 14px;
  }

  .v-icon {
    display: inline-flex;
    width: 3rem;
    height: 2.5rem;
    font-size: 31px;
    color: #FF7826;
    background-color: #FFD293;
  }

  .v-btn {
    background-color: #FF7826;
    font-weight: 700;
    padding: 8.699px 25.01px;
    box-shadow: 0px 2px 4.7px 0px rgba(0, 0, 0, 0.30);
  }
}

.animation {
  animation: slide-in 750ms;
}

@keyframes slide-in {
  from {
    opacity: 0.35;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>