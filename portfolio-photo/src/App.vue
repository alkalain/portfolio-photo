<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  
  <header class="bg-blue-300 p-5">
    <!-- <img alt="Vue logo" class="" src="@/assets/logo.svg" width="100" height="100" /> -->
    <div class="flex justify-between items-center pl-10 pr-48">
      <HelloWorld class="flex justify-start pb-1 " msg="Welcome to Alain's port folio" /><br>
      <!-- Navigation section Obviusly...
      But what is intersting is the router part 
    so:
    the RouterLink tag refers to -> a View whitch is a one of the app's pages
    in a mor technical explanation:
    the View files are a kind of component (so a vue file).
    Then within this Views you can add all the components you need for present information or data (that are not View components).
    -->
      <nav class="flex justify-center rounded-xl pb-0.5 font-medium border-s border-blue-300 
      
      ">
        <RouterLink class="
        hover:bg-blue-700 
        hover:text-white
        hover:border-s-4 
        hover:border-b-4 
        hover:border-[#FD93C5] 
        hover:shadow-2xl
        hover:rounded-md
        rounded-md 
        pl-1 px-1 pb-1 
        border-s-4 
        border-b-4 
        border-amber-50
        shadow
        " to="/">Home</RouterLink>
        <RouterLink class="
        hover:bg-blue-700 
        hover:text-white 
        hover:border-s-4 
        hover:border-b-4 
        hover:border-[#FD93C5] 
        hover:shadow-2xl
        hover:rounded-md
        rounded-md 
        pl-1 px-1 pb-1 
        border-s-4 
        border-b-4 
        border-amber-50
        shadow 
        " to="/about">About</RouterLink>
        <RouterLink class="
        hover:bg-blue-700 
        hover:text-white 
        hover:border-s-4 
        hover:border-b-4 
        hover:border-[#FD93C5] 
        hover:shadow-2xl
        hover:rounded-md
        rounded-md 
        pl-1 px-1 pb-1 
        border-s-4 
        border-b-4 
        border-amber-50
        shadow 
        " to="/aboutme">About Me</RouterLink>
        <RouterLink class="
        hover:bg-blue-700 
        hover:text-white 
        hover:border-s-4 
        hover:border-b-4 
        hover:border-[#FD93C5] 
        hover:shadow-2xl
        hover:rounded-md
        rounded-md 
        pl-1 px-1 pb-1 
        border-s-4 
        border-b-4 
        border-amber-50
        shadow 
        " to="/photos">My photos</RouterLink>
        <RouterLink class="
        hover:bg-blue-700 
        hover:text-white 
        hover:border-s-4 
        hover:border-b-4 
        hover:border-[#FD93C5] 
        hover:shadow-2xl
        hover:rounded-md
        rounded-md 
        pl-1 px-1 pb-1 
        border-s-4 
        border-b-4 
        border-amber-50
        shadow 
        " to="/mystuff">My equipement</RouterLink>
      </nav>
      
    </div>
  </header>
  <!-- That think over here refereing to the vue router module that let me making all my app pages routing withe one file and and a reference to it within this file.-->
  <RouterView class="bg-with"/>
</template>


