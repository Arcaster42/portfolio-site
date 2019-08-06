<template>
    <div>
        <div class="spacer">
        </div>
        <div class="project-div">
            <span class="project-span" v-for="project of projects" :key="project.name" v-bind:id="project.name" v-bind:style="{backgroundImage: 'url(' + project.image + ')'}">{{project.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data: () => {
        return {
            projects: [
                {
                    name: 'rhymus',
                    release: 'open-source',
                    description: 'An open-source game developed in JavaScript and refactored in both React and Vue.',
                    image: './'
                },
                {
                    name: 'portfolio',
                    release: 'public',
                    description: 'This website written over three iterations, the latest using Vue.',
                    image: './'
                }
            ]
        }
    }
}
</script>

<style scoped>
.spacer {
    display: block;
    margin-top: 50px;
    height: 50%;
    min-height: 100px;
    width: 100%;
    background-color: darkblue;
    color: ghostwhite;
}

.project-div {
    text-align: center;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

.project-span {
    display: flex;
    float: left;
    height: 100px;
    width: 300px;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
</style>
