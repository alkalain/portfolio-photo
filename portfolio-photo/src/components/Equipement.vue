<script>
import ArticleAndPhotoPanel from '../components/panels/ArticleAndPhotoPanel.vue'
export default {
  components:{
    ArticleAndPhotoPanel
  },
  data() {
    return {
      stuffDB: [],
    };
  },
created(){
        /* Take images from the api to add them the list of stuff */
        fetch('http://localhost:3001/images')
            .then(response => response.json())
            .then((response)=> {
                //console.log("test", response[0]); // Add this line to log the API response
               
                this.stuffDB=response;
                
            });
    }
}
</script>
<template>
    
   <div class="flex justify-center">
    <ul class="rounded-2xl object-cover h-64 w-[70%] max-[720px]:w-[100%] hover:object-scale-down hover:rounded-2xl">
        <li v-for="(stuff,index) in stuffDB" :key="index" class="p-5">
          <article-and-photo-panel>
            <template #ArticleHeader>
              My Camera
            </template>
            <template #ArticleCore>
              
                {{ stuff.description }}
               
              </template>
              <template #ArticleFooter>
                <!-- <img src="https://i.stack.imgur.com/y9dpT.jpg" alt=""> -->
                <img 
                :class="stuff.format"
                :src="stuff.file" 
                :alt="stuff.name"
                class="rounded-2xl object-cover h-64 w-80"
                > 
                
            </template>
          </article-and-photo-panel>
          
        </li>
       
    </ul>

   </div>
</template>
<style>

/* img{
  width: 200px;
} */
</style>