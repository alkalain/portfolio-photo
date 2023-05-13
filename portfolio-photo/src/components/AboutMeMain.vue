<script>
import TextWritingPanel from '../components/panels/TextWritingPanel.vue'
export default {
  components: {
    TextWritingPanel
  }
}
</script>
<template>
  <text-writing-panel>
    <template #header>
      <h1>Who the fuck am I ?</h1>
    </template>
    <template #main> </template>
        <h3 class="text-3xl">Student</h3>
        <h3 class="text-3xl">Photographer</h3>
        <h3 class="text-3xl">Web developper</h3>
        <h3 class="text-3xl">Entrepronor</h3>
    <template #footer>
      <h2 class="text-2xl text-center">Contact me !</h2>
      <div class="flex items-center">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2xs" />
      </div>
    </template>
  </text-writing-panel>

  <!--    <a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-58e921f" href="https://instagram.com/itsrainingcolor" target="_blank">
			<span class="elementor-screen-only">Instagram</span>
				<i class="fab fa-instagram"></i>					
        </a> -->
</template>
