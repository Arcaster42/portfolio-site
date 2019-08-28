<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-nav>
                <b-nav-item v-on:click="navigate('Landing')">Home</b-nav-item>
                <b-nav-item v-on:click="navigate('Skills')">Skills</b-nav-item>
                <b-nav-item v-on:click="navigate('Projects')">Projects</b-nav-item>
                <b-nav-item v-on:click="navigate('Characteristics')">Characteristics</b-nav-item>
                <b-nav-item v-on:click="navigate('Profile')">GitHub / LinkedIn / Resume</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        navigate (view) {
            this.$store.commit('setView', view)
        }
    }    
}
</script>

<style scoped>
.navbar {
    position: fixed;
    height: 50px;
    background-color: white;
    overflow: hidden;
    top: 0;
    width: 100%;
    z-index: 1;
}

.link {
    float: left;
    display: block;
    text-align: center;
    margin: auto;
    padding: 14px;
    color: navy;
    font-size: 20px;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
}

.link:hover {
    color: crimson;
}
</style>
