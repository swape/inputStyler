<template>
  <div id="app">
    <h1>Input Styler</h1>
    <Inputs />
  </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'

export default {
  name: 'App',
  components: {
    Inputs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
