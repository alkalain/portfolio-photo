<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Welcome" />

      <nav>
        <RouterLink class="nav" to="/">Home</RouterLink>
        <RouterLink class="nav" to="/about">About</RouterLink>
        <RouterLink class="nav" to="/aboutme">About Me</RouterLink>
        <RouterLink class="nav" to="/photos">My photos</RouterLink>
        <RouterLink class="nav" to="/mystuff">My equipement</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.nav{
display: flex;
justify-content: space-between;
align-items: flex-end;
}
</style>
