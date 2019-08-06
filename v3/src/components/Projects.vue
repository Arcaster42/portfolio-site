<template>
    <div>
        <div class="spacer">
        </div>
        <div class="project-div" v-for="project of projects" :key="project.name">
            <span class="project-span" v-bind:id="project.name">{{project.name}}</span>
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
</style>
