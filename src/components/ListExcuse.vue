<script>
import { mock } from '../mocked-data.js'

export default {
    data(){
        return{
            mockedData : [],
        }
    },
    methods : {
        showData (){
            this.mockedData = mock.map( i=> ({
            http_code : i.http_code,
            tag : i["tag "],
            message : i["message "],
           }))
           return this.mockedData;
        },
    },
    mounted () {
        this.showData(); 
    }
}

</script>

<template>
  <div class="d-flex align-center">
    <v-table 
    fixed-header
    height="500px"
    style="width: 74em;"
    class="ms-16 "
    density="compact"
    >   
    <thead> 
        <tr>
            <th style="background-color: black; color: white;">Tag</th>
            <th style="background-color: black; color: white;">Message</th>
            <th style="background-color: black; color: white;">Http_Code</th>
        </tr>
    </thead>  
    <tbody  >
            <tr v-for="items in mockedData " >
                <td>{{ items.http_code }}</td>
                <td>{{ items.tag }}</td>
                <td>{{ items.message }}</td>
            </tr>
    </tbody>        
    </v-table>
    </div>
</template>

<style>
.center{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    justify-items: center;
    width: 100%;
    height: 10em;
    margin-right: 10em ;
}

tr:nth-child(even){
    background-color: lightgrey;
}
</style>
