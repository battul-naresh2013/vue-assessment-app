<template>
  <div id="app" class="container">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import appHeader from './components/app-header/appHeader.vue';

export default {
  components: {
    appHeader,
  },
};
</script>
