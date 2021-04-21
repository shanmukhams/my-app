<template>
  <div class="todo">
    <h1 class="subheading grey--text">To Do</h1>

    <v-container class="my-5">
          <v-layout row justify-start class="mb-10">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  dark
                   v-bind="attrs"
                    v-on="on"
                >
                  <v-icon
                    dark
                    left
                  >
                    mdi-calendar-check
                  </v-icon>Task
                </v-btn>
                </template>
                <span>Sort by project author</span>
              </v-tooltip>

          <v-tooltip top>
                 <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  dark
                   v-bind="attrs"
                    v-on="on"
                >
                  <v-icon
                    dark
                    left
                  >
                    mdi-calendar-check
                  </v-icon>Person
                </v-btn>
                </template>
                <span>Sort by project author</span>
              </v-tooltip>

          </v-layout>

          <AddTask/>

        
      <v-expansion-panels flat>
        <v-expansion-panel  :class="` project ${project.status}`"
          v-for="project in projects" :key="project.title"
        >
          <v-expansion-panel-header >
            <v-layout row wrap >
            
              <v-flex xs12 md6>
              <div class="caption grey--text">Project title</div>
              <div>{{ project.title }}</div>
              </v-flex>

              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Person</div>
                <div>{{ project.person }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Due by</div>
                <div>{{ project.due }}</div>
              </v-flex>
              <v-flex xs2 sm4 md2>
                <div class="right">
                <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
                </div>
              </v-flex>
              
            </v-layout>
          </v-expansion-panel-header>
          <v-expansion-panel-content> <div>{{ project.content }}</div>
            </v-expansion-panel-content>
          <v-divider class="mt-3"></v-divider>
        </v-expansion-panel>
        
      </v-expansion-panels>

    </v-container>
    
  </div>
  
</template>

<script>

import AddTask from '../components/AddTask';

export default {
  components:{AddTask},
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
       
       ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #FFCB9A;
}
.project.ongoing{
  border-left: 4px solid #D1E8E2;
}
.project.overdue{
  border-left: 4px solid #DA7B93;
}
.v-chip.complete{
  background: #FFCB9A !important;;
}
.v-chip.ongoing{
  background: #D1E8E2 !important;;
}
.v-chip.overdue{
  background: #DA7B93 !important;
}
</style>