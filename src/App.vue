<template>
  <div id="app">
    <Banner/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  components: {
    Banner
  }
}
</script>

<style lang="scss">
@import '@/scss/base.scss';
</style>
