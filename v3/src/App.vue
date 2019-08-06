<template>
  <div>
    <Navigation v-on:changeView='changeView' />
    <Landing v-if="this.view==='landing'"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Landing
  },
  data: () => {
    return {
      view: 'landing'
    }
  },
  methods: {
    changeView: function(view) {
      this.view = view
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0px;
}
</style>
