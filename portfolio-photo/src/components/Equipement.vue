<script>
export default {
  data() {
    return {
      exemplesDB: [],
    };
  },
created(){
        /* Take images from the api to add them the list of exemples */
        fetch('http://localhost:3000/images')
            .then(response => response.json())
            .then((response)=> {
                console.log("test", response[0]); // Add this line to log the API response
               
                this.exemplesDB=response.images;
                
            });
    }
}
</script>
<template>
    <div>
        <p>equipement template (debug)</p>
    </div>
   <div class="equipement">
    <ul>
        <li id="camera">
            <img 
            :src="exemplesDB.file" 
            :alt="exemplesDB.name"
            >
            <p>My camera </p>
        </li>
    </ul>

   </div>
</template>