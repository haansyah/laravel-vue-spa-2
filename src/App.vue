<template>
  <div id="app">
    <Navigation />
    <main class="py-5">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from "./components/NavigationVue.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style></style>
