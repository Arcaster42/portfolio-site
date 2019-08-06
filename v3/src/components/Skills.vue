<template>
    <div>
        <div class="spacer">
        </div>
            <div class="skill-div">
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('front-end')">Front-End</button>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('back-end')">Back-End</button>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('databases')">Databases</button>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('languages')">Languages</button>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('frameworks/libraries')">Frameworks / Libraries</button>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('management')">Management</button>
                <div v-if="skillView==='front-end'">
                    <div v-for="(skill, i) in skills['front-end']" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-f-' + i"></span></span>
                    </div>
                </div>
                <div v-if="skillView==='back-end'">
                    <div v-for="(skill, i) in skills['back-end']" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-b-' + i"></span></span>
                    </div>
                </div>
                <div v-if="skillView==='databases'">
                    <div v-for="(skill, i) in skills['databases']" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-d-' + i"></span></span>
                    </div>
                </div>
                <div v-if="skillView==='languages'">
                    <div v-for="(skill, i) in skills['languages']" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-l-' + i"></span></span>
                    </div>
                </div>
                <div v-if="skillView==='frameworks/libraries'">
                    <div v-for="(skill, i) in skills['frameworks/libraries']" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-fl-' + i"></span></span>
                    </div>
                </div>
                <div v-if="skillView==='management'">
                    <div v-for="(skill, i) in skills['management']" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-m-' + i"></span></span>
                    </div>
                </div>  
            </div>
        <div class="spacer">
        </div>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data: () => {
        return {
            skillView: 'none',
            skillCategories: [
                'front-end', 
                'back-end', 
                'databases', 
                'languages', 
                'frameworks/libraries', 
                'management'
                ],
            skills: {
                'front-end': [
                    'HTML',
                    'CSS',
                    'JavaScript'
                ],
                'back-end': [
                    'JavaScript',
                    'C#',
                    'Python'
                ],
                'databases': [
                    'SQL / Postgres',
                    'MongoDB'
                ],
                'languages': [
                    'JavaScript',
                    'C#',
                    'Python',
                    'R',
                    'PHP'
                ],
                'frameworks/libraries': [],
                'management': []
            }
        }
    },
    methods: {
        changeView: function(view) {
            this.skillView = view
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

.skill-div {
    text-align: center;
    margin-top: 20px;
}

.btn {
    margin-top: 25px;
    height: 50px;
    width: 180px;
    border: none;
    background-color: navy;
    color: white;
    font-size: 16px;
}

.btn:hover {
    background-color: rgb(77, 77, 185);
}

.skill {
    display: inline-block;
    height: 10px;
    width: 300px;
    background-color: rgba(128, 128, 128, 0.336);
    border-radius: 25px;
    margin-top: 10px;
    text-align: center;
}

.skill-title {
    color: black;
    display: block;
    text-align: center;
}

#p-f-0 {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 40%;
    border-radius: 25px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
