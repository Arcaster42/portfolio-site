<template>
    <div>
        <div class="spacer">
        </div>
            <div class="skill-div">
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('front-end')">Front-End</button>
                <span v-if="this.skillView==='front-end'" class="skill-title">Skill Name</span>
                <span id="skill-f-1" v-if="this.skillView==='front-end'" class="skill"><span id="p-f-1"></span></span>
                <span v-if="this.skillView==='front-end'" class="skill-title">Skill Name</span>
                <span id="skill-f-1" v-if="this.skillView==='front-end'" class="skill"><span id="p-f-2"></span></span>
                <span v-if="this.skillView==='front-end'" class="skill-title">Skill Name</span>
                <span id="skill-f-1" v-if="this.skillView==='front-end'" class="skill"><span id="p-f-3"></span></span>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('back-end')">Back-End</button>
                <span v-if="this.skillView==='back-end'" class="skill-title">Skill Name</span>
                <span id="skill-b-1" v-if="this.skillView==='back-end'" class="skill"><span id="p-b-1"></span></span>
                <span v-if="this.skillView==='back-end'" class="skill-title">Skill Name</span>
                <span id="skill-b-1" v-if="this.skillView==='back-end'" class="skill"><span id="p-b-2"></span></span>
                <span v-if="this.skillView==='back-end'" class="skill-title">Skill Name</span>
                <span id="skill-b-1" v-if="this.skillView==='back-end'" class="skill"><span id="p-b-3"></span></span>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('databases')">Databases</button>
                <span v-if="this.skillView==='databases'" class="skill-title">Skill Name</span>
                <span id="skill-d-1" v-if="this.skillView==='databases'" class="skill"><span id="p-d-1"></span></span>
                <span v-if="this.skillView==='databases'" class="skill-title">Skill Name</span>
                <span id="skill-d-1" v-if="this.skillView==='databases'" class="skill"><span id="p-d-2"></span></span>
                <span v-if="this.skillView==='databases'" class="skill-title">Skill Name</span>
                <span id="skill-d-1" v-if="this.skillView==='databases'" class="skill"><span id="p-d-3"></span></span>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('languages')">Languages</button>
                <span v-if="this.skillView==='languages'" class="skill-title">Skill Name</span>
                <span id="skill-l-1" v-if="this.skillView==='languages'" class="skill"><span id="p-l-1"></span></span>
                <span v-if="this.skillView==='languages'" class="skill-title">Skill Name</span>
                <span id="skill-l-1" v-if="this.skillView==='languages'" class="skill"><span id="p-l-2"></span></span>
                <span v-if="this.skillView==='languages'" class="skill-title">Skill Name</span>
                <span id="skill-l-1" v-if="this.skillView==='languages'" class="skill"><span id="p-l-3"></span></span>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('frameworks/libraries')">Frameworks / Libraries</button>
                <span v-if="this.skillView==='frameworks/libraries'" class="skill-title">Skill Name</span>
                <span id="skill-fl-1" v-if="this.skillView==='frameworks/libraries'" class="skill"><span id="p-fl-1"></span></span>
                <span v-if="this.skillView==='frameworks/libraries'" class="skill-title">Skill Name</span>
                <span id="skill-fl-1" v-if="this.skillView==='frameworks/libraries'" class="skill"><span id="p-fl-2"></span></span>
                <span v-if="this.skillView==='frameworks/libraries'" class="skill-title">Skill Name</span>
                <span id="skill-fl-1" v-if="this.skillView==='frameworks/libraries'" class="skill"><span id="p-fl-3"></span></span>
                <button class="btn" v-if="this.skillView==='none'" v-on:click="changeView('management')">Management</button>
                <span v-if="this.skillView==='management'" class="skill-title">Skill Name</span>
                <span id="skill-m-1" v-if="this.skillView==='management'" class="skill"><span id="p-m-1"></span></span>
                <span v-if="this.skillView==='management'" class="skill-title">Skill Name</span>
                <span id="skill-m-1" v-if="this.skillView==='management'" class="skill"><span id="p-m-2"></span></span>
                <span v-if="this.skillView==='management'" class="skill-title">Skill Name</span>
                <span id="skill-m-1" v-if="this.skillView==='management'" class="skill"><span id="p-m-3"></span></span>
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
            skillView: 'none'
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

#p-f-1 {
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
