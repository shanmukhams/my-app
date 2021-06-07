<template>
  <v-container >
      
      <v-app-bar
      color="primary"
      dark
      shrink-on-scroll
      src="profile.jpg"
      fade-img-on-scroll
      :height="$vuetify.breakpoint.xs ? 100 : 250"
      prominent 
      app
      
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          
        ></v-img>
      </template>
      
      <v-toolbar class="primary"  height="50px">
        <v-toolbar-title class="mx-6 pb-2 accent--text font-weight-medium">Si-VERSE</v-toolbar-title>
        <br/>
      </v-toolbar>
        
       
       



      <template v-slot:extension >
      
        <v-tabs align-with-title >
          <v-tab router to="/" >Profile</v-tab>
          <!-- <v-tab router to="/chat" >Chat</v-tab>
          <v-tab router to="/movie" >Movie Recommendation</v-tab>
          <v-tab router to="/todo"  >To Do</v-tab>
          <v-tab router to="/blog"  >Blog</v-tab>
          <v-tab router to="/game"  >Games</v-tab> -->
          
          
        </v-tabs>
      </template>
    </v-app-bar>
         
      
      
  </v-container>
</template>

<script>
  export default {
    name: 'Header',
    components: {
       
     },
    props: {
       
      },
    data() {
    return {
      

    }
  },methods: {
    
    
  },
  computed: {
    
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 100
          case 'sm': return 150
          case 'md': return 250
          case 'lg': return 350
          case 'xl': return 550
        }
        
        return 550
      },
    },
  }
  
</script>

<style>



.v-toolbar__content, .v-toolbar__extension {
     padding: 0px  !important;
}

.toolbar__image {
  top:50px !important;
}
</style>
