<script>
/* 
TODO :
find a way to see images 
at this point every soltion not worcking 
Try to do the api extraction with text to review how to extract data from an api
-> pb the images are recived by client but not pushed to the dom
find a way


api key :
nzKrZoQuPRSCYbVQIxuPDoMYb4UimVxhawO3leHGJSJv3P3tkeO2wQxg
*/
//C:\Users\Utilisateur\OneDrive\Documents\Alain\Entreprise\Code\apprentissage\vue\Vue_Projects\DB\photos\exemples
//c:/Users/Utilisateur/OneDrive/Documents/Alain/Entreprise/Code/apprentissage/vue/Vue_Projects/DB/photos/exemples/MountainPaysage.JPG
export default {
  data() {
    return {
      exemples: [],
    };
  },
created(){
        /* Take images from the api to add them the list of exemples */
        fetch('http://localhost:3000/images')
            .then(response => response.json())
            .then((response)=> {
                console.log(response[0]); // Add this line to log the API response
                this.exemples=response;
                
            });
    }
}

</script>

 <template>
    <div class="images" 
    :key="index"
    v-for="(exemple,index) in exemples" >
    <ul>
      <li>
        {{exemple.name}} 
        <img
        :src="exemple.file" 
        :alt="exemple.name">
          </li>
        </ul>
    </div>
    
 </template>
 <style>
img{
  display: flex;
justify-content: space-between;
}
</style>
 