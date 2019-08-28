<template>
  <div>
    <Navigation v-on:changeView='changeView'/>
    <transition name="fade" mode="out-in">
      <Landing v-if="getView==='Landing'"/>
      <Skills v-if="getView==='Skills'"/>
      <Projects v-if="getView==='Projects'"/>
    </transition>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Landing from './components/Landing.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects'

export default {
  name: 'app',
  components: {
    Navigation,
    Landing,
    Skills,
    Projects
  },
  data: () => {
    return {
      
    }
  },
  computed: {
    getView () {
      return this.$store.state.view
    }
  },
  methods: {
    
  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 0px !important; /* Height of the footer */
  padding: 0;
  padding-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
