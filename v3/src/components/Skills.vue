<template>
    <div>
        <div class="spacer">
        </div>
            <div class="skill-div">
                <div v-if="skillView==='none'">
                    <button v-for="(button, key) in buttons" :key="key" class="btn" v-on:click="changeView(key)">
                        {{button}}
                    </button>
                </div>
                <div v-if="skillView!=='none'">
                    <div v-for="(skill, i) in skills[skillView]" :key="skill">
                        <span class="skill-title">{{skill}}</span>
                        <span v-bind:id="skill" class="skill"><span v-bind:id="'p-' + skill"></span></span>
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
                    'SQL/Postgres',
                    'MongoDB'
                ],
                'languages': [
                    'JavaScript',
                    'C#',
                    'Python',
                    'R',
                    'PHP'
                ],
                'frameworks/libraries': [
                    'Node/Express',
                    'Vue/Vuex',
                    'React/Redux',
                    'Pug',
                    'Mongoose'
                ],
                'management': []
            },
            buttons: {
                'front-end': 'Front-End',
                'back-end': 'Back-End',
                'databases': 'Databases',
                'languages': 'Languages',
                'frameworks/libraries': 'Frameworks/Libraries',
                'management': 'Management'
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

#p-HTML {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 85%;
    border-radius: 25px;
}

#p-CSS {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 60%;
    border-radius: 25px;
}

#p-JavaScript {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 85%;
    border-radius: 25px;
}

#p-C\# {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 75%;
    border-radius: 25px;
}

#p-Python {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 50%;
    border-radius: 25px;
}

#p-SQL\/Postgres {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 70%;
    border-radius: 25px;
}

#p-MongoDB {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 80%;
    border-radius: 25px;
}

#p-R {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 65%;
    border-radius: 25px;
}

#p-PHP {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 60%;
    border-radius: 25px;
}

#p-Node\/Express {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 85%;
    border-radius: 25px;
}

#p-Vue\/Vuex {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 85%;
    border-radius: 25px;
}

#p-React\/Redux {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 70%;
    border-radius: 25px;
}

#p-Pug {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 85%;
    border-radius: 25px;
}

#p-Mongoose {
    float: left;
    height: 10px;
    background-color: rgb(13, 4, 114);
    width: 80%;
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
