<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  
  <header class="header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
    
    <div class="wrapper">
      
      <!-- Navigation section Obviusly...
      But what is intersting is the router part 
    so:
    the RouterLink tag refers to -> a View whitch is a one of the app's pages
    in a mor technical explanation:
    the View files are a kind of component (so a vue file).
    Then within this Views you can add all the components you need for present information or data (that are not View components).
    -->
      <nav>
        <RouterLink class="nav" to="/">Home</RouterLink>
        <RouterLink class="nav" to="/about">About</RouterLink>
        <RouterLink class="nav" to="/aboutme">About Me</RouterLink>
        <RouterLink class="nav" to="/photos">My photos</RouterLink>
        <RouterLink class="nav" to="/mystuff">My equipement</RouterLink>
      </nav>
      <HelloWorld msg="Welcome" />
    </div>
  </header>
  <!-- That think over here refereing to the vue router module that let me making all my app pages routing withe one file and and a reference to it within this file.-->
  <RouterView />
</template>


