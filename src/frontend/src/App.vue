<template> 
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>

export default {
  name: 'App',

  created() {
    // Note: fetch initial data
    this.$store.dispatch('init');
  }
};

</script>

<!-- Импортируем глобальные стили для приложения -->
<style lang="scss">
@import "~@/assets/scss/app";
</style>