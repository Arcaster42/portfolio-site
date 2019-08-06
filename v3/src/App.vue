<template>
  <div>
    <Navigation v-on:changeView='changeView' />
    <transition name="fade" mode="out-in">
      <Landing v-if="this.view==='landing'"/>
      <Skills v-if="this.view==='skills'"/>
    </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
