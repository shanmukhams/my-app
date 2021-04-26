<template>
<div class="team">
  
  <v-toolbar flat  style="position: relative;">
    <h1 class="subheading grey--text">Profile</h1>
  </v-toolbar>

    <v-container class="my-5" >
      
      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">ABOUT ME</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="center">
                  <v-flex xs12 md8 >
                    <br/>
                    <br/>
                    <h3 class="font-22 capitalize ">Hallo!</h3>
                    <p class="font-16 line-height-28">{{profileData.about}}</p>
                    <v-btn class="ma-2" dark><v-icon dark left>mdi-download</v-icon>Download CV</v-btn>
                  
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-container class="ml-16">
                    <v-avatar size="300" class="ml-16">
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

      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">WORK EXPERIENCE</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="e in profileData.expereince"
                        :key="e.title"
                      >
                        <span slot="opposite">{{e.startdate}} - {{e.enddate}}</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">{{e.company}}</div>
                                <div>{{e.title}}</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>{{e.description}}</div>
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

      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">SKILLS</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="n in 4"
                        :key="n"
                      >
                        <span slot="opposite">Tus eu perfecto</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">Infosys Limited</div>
                                <div>Sr. Software Developer</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>JAVA, C#</div>
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

      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">EDUCATION</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="n in 4"
                        :key="n"
                      >
                        <span slot="opposite">Tus eu perfecto</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">Infosys Limited</div>
                                <div>Sr. Software Developer</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>JAVA, C#</div>
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

      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">COURSES, TRAININGS & CERTIFICATION</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="n in 4"
                        :key="n"
                      >
                        <span slot="opposite">Tus eu perfecto</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">Infosys Limited</div>
                                <div>Sr. Software Developer</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>JAVA, C#</div>
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


      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">PROJECTS</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="n in 4"
                        :key="n"
                      >
                        <span slot="opposite">Tus eu perfecto</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">Infosys Limited</div>
                                <div>Sr. Software Developer</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>JAVA, C#</div>
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

      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">AWARDS & ACHIEVEMENTS</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="n in 4"
                        :key="n"
                      >
                        <span slot="opposite">Tus eu perfecto</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">Infosys Limited</div>
                                <div>Sr. Software Developer</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>JAVA, C#</div>
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

      <v-card flat>
         
        <v-layout row wrap >
          <v-flex xs12>
            <v-card flat class="light-bg">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <v-card-title  class="justify-center mb-60"><h2 class="mb-20 primary--text">EXTRA-CURICULAR ACTIVITIES</h2></v-card-title>
                      <div class="horizontal-line"><div class="top"></div><div class="bottom"></div></div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-15" align="left">
                  <v-flex xs12>
                   <v-timeline
                      
                      dense
                    >
                      <v-timeline-item right
                        v-for="n in 4"
                        :key="n"
                      >
                        <span slot="opposite">Tus eu perfecto</span>
                        <v-expansion-panels flat>
                          <v-expansion-panel >
                            <v-expansion-panel-header >
                              <v-layout row wrap >
                              
                                <v-flex xs12 md12>
                                <div class="caption grey--text">Infosys Limited</div>
                                <div>Sr. Software Developer</div>
                                </v-flex>
                              </v-layout>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content> <div>JAVA, C#</div>
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

    </v-container>
    
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
      const res = await fetch('http://localhost:3000/profile')
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
    (96px - var(--timeline-line-width)) / 2
  ) !important;
  width: var(--timeline-line-width) !important;
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