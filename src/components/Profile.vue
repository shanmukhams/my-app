<template>
  <v-container>
  <v-row>
        <v-col>
          <v-card>
             <v-img
          src="https://picsum.photos/510/300?random"
  
        ></v-img>
          </v-card>
        </v-col>
        <v-col>
           <v-row>
             <v-card>
            {{profileData.firstname}}
            {{profileData.lastname}}
          </v-card>
           </v-row>
           <v-row> <v-card>
            {{profileData.title}}
          </v-card></v-row>
           <v-row> <v-card>
            {{profileData.currentlocation}}
          </v-card></v-row>
        </v-col>
      </v-row>
      <v-row>
             <v-card>
               About
            {{profileData.about}}
          </v-card>
           </v-row>
         
      
      
  </v-container>
</template>

<script>
  export default {
    name: 'Profile',
    components: {
       
     },
    props: {
       
      },
    data() {
    return {
      profileData:{}

    }
  },
    computed:{
      
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
