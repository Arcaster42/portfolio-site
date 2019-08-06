<template>
    <div class="navbar">
        <span class="link" v-on:click="navigate('landing')">Home</span>
        <span class="link" v-on:click="navigate('skills')">Skills</span>
        <span class="link" v-on:click="navigate('projects')">Projects</span>
        <span class="link" v-on:click="navigate('characteristics')">Characteristics</span>
        <span class="link" v-on:click="navigate('profile')">GitHub / LinkedIn / Resume</span>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        navigate: function(destination) {
            this.$emit('changeView', destination)
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
