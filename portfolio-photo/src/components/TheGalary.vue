<script setup>
export default{
    data(){
        return{
            /* store images */
            exemples:[],
        }
    },
    created(){
        /* Take images from the api to add them the list of exemples */
        fetch('http://localhost:3000/images')
            .then(response => response.json())
            .then(this.exemples => {//wtf err
                this.exemples=exemples;//wtf err
            });
    },
}

</script>

 <template>
    <div class="images">
        <img src=PhotoEx alt="Une montagne de l'autre coté du Vercore">
    </div>
    
 </template>
 