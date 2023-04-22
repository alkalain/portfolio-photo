<script>
/* 
TODO :


api key :
site : https://www.pexels.com/api/documentation/
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
               // console.log(response[0]); // Add this line to log the API response
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
        <div class="debug">{{exemple.name}} </div>
        <img
        :class="exemple.format"
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
 