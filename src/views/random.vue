<script>
import  mock  from '../mocked-data.js'
import { ref } from 'vue'
export default{
    data(){
        return{
            mock,
        }
        
},
    setup(){
        const apology = ref({})
        return  {apology}   
    },
    
    methods: {
        random(){
            const index = Math.floor(Math.random() * (mock.length))
            this.apology = mock[index]
        } 
        },
    }
</script>

<template>
 
    <v-card title="Afficher un message" width="230px">

    <v-divider class="border-opacity-25 ms-3 mb-1" color="info" width="200px"></v-divider>

    <h4 class="mt-6 text-center">
      {{ apology.message }}
    </h4>
   
    <v-divider class="border-opacity-25 ms-3 mt-4 mb-2" color="info" width="200px"></v-divider>
    <v-card-actions>
      <v-btn @click=random color="success" class="ms-7">Excuse random</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>

</style>