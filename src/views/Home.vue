<template>
<div class="team">
  
  <v-toolbar flat  style="position: relative;">
    <h2 class="subheading grey--text">Profile</h2>
  </v-toolbar>

    <v-container >
      
      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                        <div class="h2p  primary--text" style="text-align: center;">ABOUT ME</div>
                        
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="" align="center">
                  <v-flex xs12 md8 >
                    <br/>
                    <h3 class="font-22 capitalize ">Hallo!</h3>
                    <p class=" font-16 line-height-28">{{profileData.about}}</p>
                   
                    <v-card-title class="justify-center">
                      <v-btn
                        v-for="i in profileData.contacts"
                        :key="i.icon"
                        class="mx-6 grey--text"
                        icon
                        target="_blank"
                        :href="i.url"
                         
                      >
                        <v-icon size="24px">
                          {{ i.icon }}
                        </v-icon>
                        {{i.number}}
                      </v-btn>
                    </v-card-title>

                    <v-btn :class="$vuetify.breakpoint.xs ? 'mb-4 ml-16':'mb-4'" dark target="_blank"
                        :href="profileData.cv"><v-icon dark left>mdi-download</v-icon>Download CV</v-btn>
                  
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-container >
                    <v-avatar size="200" class="ml-10">
                      <img src="/final.jpg"/>
                    </v-avatar>
                    </v-container>
                   
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

      <v-card flat class="mt-5">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">WORK EXPERIENCE</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout  row wrap :class="$vuetify.breakpoint.xs ? 'mt-7' : 'mt-15'" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="e in profileData.expereince"
                        :key="e.title"
                      >
                        <span :slot="$vuetify.breakpoint.xs ? '' : 'opposite'" style="font-size: small;">{{e.startdate}} - {{e.enddate}}</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md8>
                                <div class="caption grey--text">{{e.company}}</div>
                                <div>{{e.title}}</div>
                                </v-flex>
                                <v-flex xs12 md4>
                                <div class="caption grey--text my-2"><v-icon small class="mr-2">mdi-map-marker-radius</v-icon>{{e.location}}</div>
                                <div><v-icon small class="mr-2">mdi-briefcase</v-icon>{{e.type}}</div>
                                <div v-show="$vuetify.breakpoint.xs" class="mt-2 mb-4" style="font-size: small;"><v-icon small class="mr-2 "> mdi-calendar</v-icon>{{e.startdate}} - {{e.enddate}}</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>
                                <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                             
                                <v-list dense>
                                  <v-subheader>Tasks</v-subheader>
                                  <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                  >
                                    <v-list-item
                                      v-for="i in e.tasks"
                                      :key="i"
                                    >
                                      <v-list-item-icon>
                                        <v-icon small>mdi-chevron-right</v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        <v-list-item-title >{{i}}</v-list-item-title>
                                        
                                        
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list-item-group>
                                </v-list>
                             </v-flex>
                              </v-layout>
                            </div>
                            </v-expansion-panel-content>
                            <v-divider class="mt-3"></v-divider>
                          </v-expansion-panel>
                          
                        </v-expansion-panels>
                      </v-timeline-item>
                    </v-timeline>
            
                  
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

      <v-card flat class="pt-8">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">SKILLS</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                 <v-layout  row wrap :class="$vuetify.breakpoint.xs ? 'mt-7' : 'mt-15'" align="center">
                        <v-flex xs12 md6 :class=" $vuetify.breakpoint.xs ? 'pl-2' : '' " :style="$vuetify.breakpoint.xs ? '' :'border-right: 2px solid #116466'">
                           <div v-for="(skill, index) in profileData.skills1" :key="index">
                              <div class="caption grey--text mt-2 ">{{skill.name}}</div>
                                <div class="mb-4">{{skill.info}}</div>
                          </div>
                        </v-flex>
                        <v-flex xs12 md6 :class="$vuetify.breakpoint.xs ? 'pl-2' : 'pl-8'">
                         
                           <div v-for="(skill, index) in profileData.skills2" :key="index">
                              <div class="caption grey--text mt-2 ">{{skill.name}}</div>
                                <div class="mb-4">{{skill.info}}</div>
                          </div>
                        </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

      <v-card flat class="pt-8">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">EDUCATION</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

            <v-layout  row wrap :class="$vuetify.breakpoint.xs ? 'mt-7' : 'mt-15'" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="e in profileData.education"
                        :key="e.school"
                      >
                        <span :slot="$vuetify.breakpoint.xs ? '' : 'opposite'" style="font-size: small;">{{e.startdate}} - {{e.enddate}}</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md8>
                                <div class="caption grey--text">{{e.school}}</div>
                                <div>{{e.degree}}</div>
                                </v-flex>
                                <v-flex xs12 md4>
                                <div class="caption grey--text my-2"><v-icon small class="mr-2">mdi-map-marker-radius</v-icon>{{e.location}}</div>
                              <div v-show="$vuetify.breakpoint.xs" class="mt-2 mb-4" style="font-size: small;"><v-icon small class="mr-2 "> mdi-calendar</v-icon>{{e.startdate}} - {{e.enddate}}</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>
                                <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                             
                                <v-list dense>
                                  <v-subheader>Focus Areas</v-subheader>
                                  <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                  >
                                    <v-list-item
                                      v-for="i in e.subjects"
                                      :key="i"
                                    >
                                      <v-list-item-icon>
                                        <v-icon small>mdi-chevron-right</v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        <v-list-item-title >{{i}}</v-list-item-title>
                                        
                                        
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list-item-group>
                                </v-list>
                             </v-flex>
                              </v-layout>
                            </div>
                            </v-expansion-panel-content>
                            <v-divider class="mt-3"></v-divider>
                          </v-expansion-panel>
                          
                        </v-expansion-panels>
                      </v-timeline-item>
                    </v-timeline>
            
                  
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

      <v-card flat class="pt-8">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">COURSES, TRAININGS & CERTIFICATION</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

            <v-layout  row wrap :class="$vuetify.breakpoint.xs ? 'mt-7' : 'mt-15'" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="e in profileData.courses"
                        :key="e.school"
                      >
                        <span :slot="$vuetify.breakpoint.xs ? '' : 'opposite'" style="font-size: small;">{{e.startdate}} - {{e.enddate}}</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md8>
                                <div class="caption grey--text">{{e.instructor}} at {{e.institute}}</div>
                                <div>{{e.name}}</div>
                                </v-flex>
                                <v-flex xs12 md1>
                                <div v-show="$vuetify.breakpoint.xs" class="mt-2 mb-4" style="font-size: small;"><v-icon small class="mr-2 "> mdi-calendar</v-icon>{{e.startdate}} - {{e.enddate}}</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>
                                <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                             
                                <v-list dense>
                                  <v-subheader>Focus Areas</v-subheader>
                                  <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                  >
                                    <v-list-item
                                      v-for="i in e.topics"
                                      :key="i"
                                    >
                                      <v-list-item-icon>
                                        <v-icon small>mdi-chevron-right</v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        <v-list-item-title >{{i}}</v-list-item-title>
                                        
                                        
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list-item-group>
                                </v-list>
                             </v-flex>
                              </v-layout>
                            </div>
                            </v-expansion-panel-content>
                            <v-divider class="mt-3"></v-divider>
                          </v-expansion-panel>
                          
                        </v-expansion-panels>
                      </v-timeline-item>
                    </v-timeline>
            
                  
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

      <v-card flat class="pt-8">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">PROJECTS</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

            <v-layout  row wrap :class="$vuetify.breakpoint.xs ? 'mt-7' : 'mt-15'" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="e in profileData.projects"
                        :key="e.school"
                      >
                        <span :slot="$vuetify.breakpoint.xs ? '' : 'opposite'" style="font-size: small;">{{e.startdate}} - {{e.enddate}}</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md8>
                                <div class="caption grey--text">{{e.technology}}</div>
                                <div>{{e.name}}</div>
                                </v-flex>
                                <v-flex xs12 md1>
                                <div v-show="$vuetify.breakpoint.xs" class="mt-2 mb-4" style="font-size: small;"><v-icon small class="mr-2 "> mdi-calendar</v-icon>{{e.startdate}} - {{e.enddate}}</div>
                                </v-flex>
                                
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>
                                <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                             
                                <v-list dense>
                                  <v-subheader>Tasks</v-subheader>
                                  <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                  >
                                    <v-list-item
                                      v-for="i in e.topics"
                                      :key="i"
                                    >
                                      <v-list-item-icon>
                                        <v-icon small>mdi-chevron-right</v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        <v-list-item-title >{{i}}</v-list-item-title>
                                        
                                        
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list-item-group>
                                </v-list>
                             </v-flex>
                              </v-layout>
                            </div>
                            </v-expansion-panel-content>
                            <v-divider class="mt-3"></v-divider>
                          </v-expansion-panel>
                          
                        </v-expansion-panels>
                      </v-timeline-item>
                    </v-timeline>
            
                  
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

      <v-card flat class="pt-8">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">AWARDS & ACHIEVEMENTS</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

            <v-layout  row wrap :class="$vuetify.breakpoint.xs ? 'mt-7' : 'mt-15'" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item left
                        v-for="e in profileData.awards"
                        :key="e.name"
                      >
                        <span :slot="$vuetify.breakpoint.xs ? '' : 'opposite'" style="font-size: small;">{{e.year}}</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div>{{e.name}}</div>
                                </v-flex>
                                
                              </v-layout>
                            </v-expansion-panel-header>
                            
                            <v-divider class="mt-3"></v-divider>
                          </v-expansion-panel>
                          
                        </v-expansion-panels>
                      </v-timeline-item>
                    </v-timeline>
            
                  
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>

     

      

      <v-card flat class="pt-8">
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <div class="h2p  primary--text" style="text-align: center;">EXTRA-CURICULAR ACTIVITIES</div>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class=" pl-5" align="center">
                        <v-flex xs12 md12 >
                           
                           <v-list dense>
                                 
                                  <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                  >
                                    <v-list-item
                                      v-for="i in profileData.activities"
                                      :key="i"
                                    >
                                      <v-list-item-icon>
                                        <v-icon small>mdi-chevron-right</v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        {{i.name}}
                                        
                                        
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list-item-group>
                                </v-list>
                        </v-flex>
                        
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
         
        </v-layout>
      </v-card>
 
    </v-container>
   <br/><br/><br/><br/><br/><br/><br/>
  </div>

 
  
</template>

<script>




export default {
  name: 'Home',
  components: {

    
  },
  props: {
      },
  data() {
    return {
      profileData:{}

    }
  },
   methods:{
    async fetchRegisters(){
      const res = await fetch('http://10.54.79.34:3000/profile')
      var data = await res.json() 
      return data
    }
  },
  async created() {
    this.profileData = await this.fetchRegisters()
   
  },
  
}
</script>

<style>

.v-list-item__title, .v-list-item__subtitle {
 
    white-space: normal !important;
}

.h2p{
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 10px;
}

@media (min-width: 479px) {
    :root {
  --timeline-opposite-item-width: 160px !important;
  --timeline-line-width: 8px !important;
  }

  .v-timeline--dense .v-timeline-item__opposite {
    display: inline-block !important;
  }

  .v-timeline-item__opposite {
    flex: none !important;
    min-width: var(--timeline-opposite-item-width) !important;
  }

  /* line: divider in the middle is 96px wide by default */
  .v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before {
    left: calc(
      var(--timeline-opposite-item-width) + 
      (100px - var(--timeline-line-width)) / 2
    ) !important;
  }
}

@media (max-width: 479px) {
  .v-expansion-panel-header {
    padding: 0px !important;
  }

  .v-expansion-panel-content__wrap {
      padding: 0px  !important; 
      
  }

  .v-list-item {
     padding-left: 0 !important; 
     padding-right: 20px;
}

  .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 0px !important;
}


.h2p{
    font-size: 1.2em;
    font-weight: bold;
}

}



.light-bg {
    background: #fff none repeat scroll 0 0;
}

.horizontal-line div.top {
    margin-bottom: 3px;
    width: 44px;
}

.horizontal-line div {
    background: #116466 none repeat scroll 0 0;
    height: 2px;
    margin: 0 auto;
    width: 77px;
}

</style>