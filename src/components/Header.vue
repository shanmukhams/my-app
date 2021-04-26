<template>
  <v-container>
      
      <v-app-bar
      color="primary"
      dark
      shrink-on-scroll
      :src="`${this.$route.path}.jpg`"
      fade-img-on-scroll
      height="250"
      
      app
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>
      
      <v-toolbar class="primary"  height="50px">
        <v-toolbar-title class="mx-6 pb-2 accent--text font-weight-medium">Si-VERSE</v-toolbar-title>
        
        </v-toolbar>

        <br/><br/><br/><br/>
      
       



      <template v-slot:extension >
        <v-tabs align-with-title >
          <v-tab router to="/profile" >Profile</v-tab>
          <v-tab router to="/chat" >Chat</v-tab>
          <v-tab router to="/movie" >Movie Recommendation</v-tab>
          <v-tab router to="/todo"  >To Do</v-tab>
          <v-tab router to="/blog"  >Blog</v-tab>
          <v-tab router to="/game"  >Games</v-tab>
          
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
    ChangeCoverPicture(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
    
  }
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
