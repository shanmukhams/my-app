<template>
  <v-container>
      
      <v-app-bar
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      height="200"
      fixed
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>
      <v-app-bar-title class="accent--text mx-4  font-weight-medium" style="width: 200px" >Si-VERSE</v-app-bar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension >
        <v-tabs align-with-title >
          <v-tab router to="/">Profile</v-tab>
          <v-tab router to="/chat">Chat</v-tab>
          <v-tab router to="/movie">Movie Recommendation</v-tab>
          <v-tab router to="/todo">To Do</v-tab>
          <v-tab router to="/blog">Blog</v-tab>
          <v-tab router to="/game">Games</v-tab>
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
  },
    
  }
</script>
