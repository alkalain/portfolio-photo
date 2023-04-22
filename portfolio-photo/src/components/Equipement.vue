<script>
export default {
  data() {
    return {
      exemplesDB: [],
    };
  },
created(){
        /* Take images from the api to add them the list of exemples */
        fetch('http://localhost:3001/images')
            .then(response => response.json())
            .then((response)=> {
                //console.log("test", response[0]); // Add this line to log the API response
               
                this.exemplesDB=response;
                
            });
    }
}
</script>
<template>
    <div class="debug">
        <p>equipement template (debug)</p>
    </div>
   <div class="equipement">
    <ul v-for="(exemple,index) in exemplesDB" :key="index">
        <li id="camera">
            <img 
            :class="exemple.format"
            :src="exemple.file" 
            :alt="exemple.name"
            >
            <p>My {{ exemple.name }}</p>
        </li>
    </ul>

   </div>
</template>