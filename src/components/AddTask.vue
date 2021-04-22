<template>

    <v-dialog max-width="600px">
        
        <template v-slot:activator="{ on, attrs }">
            <v-btn flat  class="success" v-bind="attrs" v-on="on">Add New Task</v-btn>
        </template>
        <v-card>
        <v-card-title>
            <h2>Add a New Task</h2>
        </v-card-title>

       <template>
  <v-row justify="center">
    <v-date-picker  v-model="picker"></v-date-picker>
  </v-row>
</template>
        <v-card-text>
            <v-form class="px-3" ref="form">
            <v-text-field v-model="title" label="Title" prepend-icon="mdi-calendar-check" :rules="inputRules"></v-text-field>
            <v-textarea v-model="content" label="Information" prepend-icon="mdi-card-text" :rules="inputRules"></v-textarea>

            <v-menu v-model="menu" :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                <v-text-field  :rules="inputRules" v-bind="attrs" v-on="on"
                :value="formattedDate" clearable label="Due date" prepend-icon="mdi-update">
                </v-text-field>
                </template>
                <v-date-picker flat v-model="due" ></v-date-picker>
                
                
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn flat @click="submit" class="success mx-0 mt-3">Add Project</v-btn>
            </v-form>
        </v-card-text>
        </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
export default {
    name: 'AddTask',
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        console.log(this.title, this.content)
      }
    }
  },
  computed: {
    formattedDate () {
      console.log(this.due)
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>