<script setup>
import TheGalary from '../components/TheGalary.vue'
</script>
<template>
<!-- This page is presenting what the photographer can do:
TODO:
    * save images in a json file
    * setup a fake api to have a test data for presentaition
    * implement the fake api in the galary component
    - Make the presentation of each photo with quick description 
    and for what kind uses it cans be usefull
-->

    <div >
        <h2 class="text-xl font-bold text-center p-2 pb-6">Here is some exemples of what I can do</h2>
        <main class="">
            <TheGalary/>
        </main>
    </div>
</template>