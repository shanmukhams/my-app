<template>
  <v-app>
    

    <v-app-bar
    absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
   
      
       
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>
      <v-app-bar-title class="accent--text mx-4  font-weight-medium" style="width: 250px">Si-VERSE</v-app-bar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension >
        <v-tabs align-with-title>
          <v-tab router to="/">Profile</v-tab>
          <v-tab router to="/chat">Chat</v-tab>
          <v-tab router to="/movie">Movie Recommendation</v-tab>
          <v-tab router to="/todo">To Do</v-tab>
          <v-tab router to="/blog">Blog</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1600px;">
        <router-view ></router-view>
      </v-container>
      </v-sheet>
    
  </v-app>
</template>


<script>
 
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawer: null,
      links: [
        'Si-VERSE'
      ],
    }
  },
 
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



  #app {
    font-family: 'Raleway', sans-serif;
  }





</style>
