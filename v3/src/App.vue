<template>
  <div>
    <Navigation v-on:changeView='changeView' />
    <Landing v-if="this.view==='landing'"/>
    <Skills v-if="this.view==='skills'"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Landing from './components/Landing.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Landing,
    Skills
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
