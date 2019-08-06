<template>
    <div class="navbar">
        <span class="link" v-on:click="navigate">Change View</span>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        navigate: function() {
            this.$emit('changeView', 'skills')
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
    z-index: 10;
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
}
</style>
