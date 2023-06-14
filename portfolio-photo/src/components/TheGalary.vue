<script>
/* 
TODO :
- Styling

api key :
site : https://www.pexels.com/api/documentation/
nzKrZoQuPRSCYbVQIxuPDoMYb4UimVxhawO3leHGJSJv3P3tkeO2wQxg
*/
//C:\Users\Utilisateur\OneDrive\Documents\Alain\Entreprise\Code\apprentissage\vue\Vue_Projects\DB\photos\exemples
//c:/Users/Utilisateur/OneDrive/Documents/Alain/Entreprise/Code/apprentissage/vue/Vue_Projects/DB/photos/exemples/MountainPaysage.JPG
import PhotoPanel from '../components/panels/PhotoPanel.vue'
export default {
  components:{
    PhotoPanel
  },
  data() {
    return {
      exemples: [],
    };
  },
created(){
        /* Take images from the api to add them the list of exemples */
        fetch('http://localhost:3002/images')
            .then(response => response.json())
            .then((response)=> {
               // console.log(response[0]); // Add this line to log the API response
                this.exemples=response;
                
            });
            console.log(this.exemples);
    }
}

</script>

 <template>
    <div class="flex justify-center pl-10" 
     >
    <ul class="grid 2xl:grid-cols-3 max-[680px]:grid-col-2 max-[320px]:grid-cols-1 gap-x-20"
      
      >
      <li :key="index"
      v-for="(exemple,index) in exemples"
      class="p-2">
      <photo-panel>

         <template #PhotoFileHeader>
          <!-- <div class="debug">{{exemple.name}} </div> -->
          <img
          :class="exemple.format"
          :src="exemple.file" 
          :alt="exemple.name" 
          class="rounded-2xl object-cover h-64 w-80 hover:object-scale-down hover:h-64 hover:w-80 hover:rounded-2xl"> 
         </template>

         <template #PhotoTitle>
          {{ exemple.title}}
         </template>

         <!-- <template #PhotoDescription>
          {{exemple.description}}
         </template> -->



      </photo-panel>
      </li>
    </ul> 
    
    </div>
    
 </template>
 <style>
img{
  display: flex;
justify-content: space-between;
width: 200px;
}
</style>
 