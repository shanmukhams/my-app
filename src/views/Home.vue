<template>
<div class="team">
    <h1 class="subheading grey--text" fixed>Profile</h1>

    <v-container class="my-5">
      <Profile/>
    </v-container>
    
  </div>
 
  
</template>

<script>

import Profile from '../components/Profile'


export default {
  name: 'Home',
  components: {
    Profile
  },
  props: {
      },
  data() {
    return {

    }
  },
  
}
</script>