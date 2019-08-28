<template>
    <b-container>
            <b-row class="skill-div">
                <transition name="fade" mode="out-in">
                    <b-col v-if="skillView!=='nones'">
                        <b-button variant="outline-primary" v-for="(button, key) in buttons" :key="key" v-on:click="changeView(key)">
                            {{button}}
                        </b-button>
                    </b-col>
                </transition>
            </b-row>
            <b-row>
                <transition name="fade" mode="out-in">
                    <b-col v-if="skillView!=='none'">
                        <div v-for="(skill) in skills[skillView]" :key="skill.name">
                            <h5>{{skill.name}}</h5>
                            <b-progress show-progress class="mb-3">
                                <b-progress-bar v-for="bar in skill.bars" :key="bar.text" :value="bar.value" :variant="bar.variant" v-b-tooltip.hover :title="bar.hover">{{bar.text}}</b-progress-bar>
                            </b-progress> 
                        </div>
                    </b-col>
                </transition>
            </b-row>
        <div class="spacer">
        </div>
    </b-container>
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
                    { name: 'HTML', bars: [{ value: 40, text: 'Syntax', variant: 'info' }, { value: 40, text: 'Best Practices', variant: 'success' }] },
                    { name: 'CSS', bars: [{ value: 30, text: 'Syntax', variant: 'info' }, { value: 30, text: 'Common Styling', variant: 'primary'}, { value: 20, text: 'Animation & Advanced Styling', variant: 'success' }] },
                    { name: 'JavaScript', bars: [{ value: 30, text: 'Syntax & Functions', variant: 'info' }, { value: 30, text: 'DOM Manipulation', variant: 'primary' }, { value: 30, text: 'Best Practices', variant: 'success' }] }
                ],
                'back-end': [
                    { name: 'JavaScript', bars: [{ value: 30, text: 'Node/Express Fundamentals', variant: 'info' }, { value: 20, text: 'REST APIs', variant: 'primary' }, { value: 15, text: 'SQL Database', variant: 'info' }, { value: 15, text: 'NoSQL Database', variant: 'primary' }, { value: 15, text: 'Best Practices', variant: 'success' }] },
                    { name: 'C#', bars: [{ value: 30, text: 'Syntax & Fundamentals', variant: 'info' }, { value: 20, text: 'REST APIs', variant: 'primary' }] },
                    { name: 'Python', bars: [{ value: 20, text: 'Syntax & Fundamentals', variant: 'info' }, { value: 15, text: 'REST APIs', variant: 'primary' }] }
                ],
                'databases': [
                    { name: 'SQL/Postgres', bars: [
                        { value: 25, text: 'Setup & Integration', variant: 'info', hover: 'Creation, migration, seeding, back-end libraries' }, 
                        { value: 15, text: 'Schema Design', variant: 'primary', hover: 'Relationships, normalization, naming patterns' }, 
                        { value: 20, text: 'Basic Queries', variant: 'info', hover: 'SQL syntax and keywords, knex syntax and functions' }, 
                        { value: 10, text: 'Advanced Queries', variant: 'primary', hover: 'Joins, multiple conditions, filters, and time values' }, 
                        { value: 10, text: 'Transactions', variant: 'info' }
                        ] 
                    },
                    { name: 'MongoDB', bars: [
                        { value: 25, text: 'Setup & Integration', variant: 'info', hover: 'Creation, migration, seeding, back-end libraries' }, 
                        { value: 15, text: 'Schema Design', variant: 'primary', hover: 'Object design, nesting patterns, naming patterns' }, 
                        { value: 30, text: 'Queries', variant: 'info', hover: 'Library-based queries' }
                        ]
                    }
                ],
                'languages': [
                    { name: 'JavaScript', bars: [
                        { value: 20, text: 'Fundamentals', variant: 'info', hover: 'Syntax, functions, operators, etc.' }, 
                        { value: 20, text: 'Advanced Concepts', variant: 'primary', hover: 'Hoisting, currying, higher-order functions, language-specific intracies, etc.' }, 
                        { value: 15, text: 'Algorithms', variant: 'info', hover: 'Using language-specific strengths in design' }, 
                        { value: 20, text: 'Full-Stack', variant: 'primary', hover: 'Front-end, Express back-end, and database access' }, 
                        { value: 15, text: 'Best Practices', variant: 'success', hover: 'Application of industry standards' }
                        ]
                    },
                    { name: 'C#', bars: [
                        { value: 20, text: 'Fundamentals', variant: 'info', hover: 'Syntax, functions, operators, etc.' }, 
                        { value: 15, text: 'Advanced Concepts', variant: 'primary', hover: 'Abstract classes, interfaces, threads, etc.' }, 
                        { value: 15, text: 'Algorithms', variant: 'info', hover: 'Using language-specific strengths in design' }, 
                        { value: 15, text: 'Full-Stack', variant: 'primary', hover: '.NET back-end and database access' }, 
                        { value: 10, text: 'Best Practices', variant: 'success', hover: 'Application of industry standards' }
                        ] 
                    },
                    { name: 'R', bars: [
                        { value: 15, text: 'Fundamentals', variant: 'info', hover: 'Syntax, file and data manipulation, etc.' }, 
                        { value: 10, text: 'Advanced Concepts', variant: 'primary', hover: 'Package use, data manipulation, common analyses' }, 
                        { value: 15, text: 'Data Analysis', variant: 'info', hover: 'Regression, confidence intervals, interpretation, etc.' }, 
                        { value: 10, text: 'Visualization', variant: 'primary', hover: 'Plot packages, common plots, geography-themed plots, themed plots' }, 
                        { value: 15, text: 'Machine Learning', variant: 'success', hover: 'Algorithm selection, set training' }
                        ] 
                    },
                    { name: 'PHP', bars: [
                        { value: 15, text: 'Fundamentals', variant: 'info', hover: 'Syntax, functions, operators, etc.' }, 
                        { value: 10, text: 'Advanced Concepts', variant: 'primary' }, 
                        { value: 15, text: 'Scaling', variant: 'info' }, 
                        { value: 15, text: 'Full-Stack', variant: 'primary', hover: 'Back-end and database access' }
                        ] 
                    },
                    { name: 'Python', bars: [
                        { value: 10, text: 'Fundamentals', variant: 'info', hover: 'Syntax, functions, operators, etc.' }, 
                        { value: 10, text: 'Advanced Concepts', variant: 'primary', hover: 'Array manipulation, math, error handling' }, 
                        { value: 10, text: 'Algorithms', variant: 'info', hover: 'Using language-specific strengths in design' }, 
                        { value: 10, text: 'Full-Stack', variant: 'primary', hover: 'Flask back-end API and database access' }, 
                        { value: 10, text: 'Machine Learning', variant: 'info', hover: 'Pandas and NumPy for summary statistics, plotting, set training' }
                        ] 
                    }
                ],
                'frameworks/libraries': [
                    { name: 'Node/Express', bars: [
                        { value: 10, text: 'Tutorial', variant: 'info', hover: 'Setup and fundamentals' },
                        { value: 60, text: '10+ Projects Completed', variant: 'primary', hover: 'Experience with over 10 projects' },
                        { value: 20, text: 'Best Practices', variant: 'success', hover: 'Import/export, file structures, use of constants, proxying' }
                    ] },
                    { name: 'Vue/Vuex', bars: [
                        { value: 15, text: 'Tutorial', variant: 'info', hover: 'Setup and fundamentals' },
                        { value: 55, text: '5+ Projects Completed', variant: 'primary', hover: 'Experience with over 5 projects' },
                        { value: 15, text: 'Best Practices', variant: 'success', hover: 'Clean templates, component design, v-directives, actions calling mutations' }
                    ] },
                    { name: 'React/Redux', bars: [
                        { value: 15, text: 'Tutorial', variant: 'info', hover: 'Setup and fundamentals' },
                        { value: 30, text: '2 Projects Completed', variant: 'primary', hover: 'Experience with two projects' },
                        { value: 10, text: 'Best Practices', variant: 'success', hover: 'Readable renders, component design, Redux mapping, state immutability' }
                    ] },
                    { name: 'Pug', bars: [
                        { value: 10, text: 'Tutorial', variant: 'info', hover: 'Setup and fundamentals' },
                        { value: 70, text: '5+ Projects Completed', variant: 'primary', hover: 'Experience with over 5 projects' },
                        { value: 10, text: 'Best Practices', variant: 'success', hover: 'Readable structure, conditionals, interpolation, imports' }
                    ] },
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
}

.skill-div {
    text-align: center;
    margin-top: 20px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
