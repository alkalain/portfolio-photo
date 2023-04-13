<script setup>
import TheGalary from '../components/TheGalary.vue'
</script>
<template>
<!-- This page is presenting what the photographer can do:
TODO:
    * save images in a json file
    * setup a fake api to have a test data for presentaition
    ° implement the fake api in the galary component
    - Make the presentation of each photo with quick description 
    and for what kind uses it cans be usefull
-->

    <div class="about">
        <h2>Here is some exemples of what I can do</h2>
    </div>
    <main>
        <TheGalary/>
    </main>
</template>