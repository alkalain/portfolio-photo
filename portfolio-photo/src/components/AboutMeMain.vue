<script>
import TextWritingPanel from '../components/panels/TextWritingPanel.vue'
import BigHeaderPanel from '../components/panels/BigHeaderPanel.vue'
export default {
  components: {
    TextWritingPanel,
    BigHeaderPanel,
  },
}
</script>
<template>

  <big-header-panel>
    <template #header>
      <h1>Who the fuck am I ?</h1>
    </template>
  </big-header-panel>
  
  <div class=" px-[20%] pt-[3%]">
    <text-writing-panel class="">
      <template #h3>
          <h3 class="text-3xl">Student</h3>
      </template>
      <template #main>
          <p>Lorem ipsum dolor sit amet.</p>
      </template>
    
      <template #footer>
        <p class="flex justify-center"> - </p>
      </template>
    </text-writing-panel>
    <text-writing-panel>
      <template #h3>
        <h3 class="text-3xl">Photographer</h3>
      </template>
      <template #main>
          <p>Lorem ipsum dolor sit amet.</p>
      </template>
    
      <template #footer>
        <p class="flex justify-center"> - </p>
      </template>
    </text-writing-panel>
    <text-writing-panel>
      <template #h3>
        <h3 class="text-3xl">Web developper</h3>
      </template>
      <template #main>
          <p>Lorem ipsum dolor sit amet.</p>
      </template>
      <template #footer>
        <p class="flex justify-center"> - </p>
      </template>
    </text-writing-panel>
    <text-writing-panel>
      <template #h3>
        <h3 class="text-3xl">Entrepronor</h3>
      </template>
      <template #main>
          <p>Lorem ipsum dolor sit amet.</p>
      </template>
      <template #footer>
        <p class="flex justify-center"> - </p>
      </template>
    </text-writing-panel>
  </div>
  <!--    <a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-58e921f" href="https://instagram.com/itsrainingcolor" target="_blank">
			<span class="elementor-screen-only">Instagram</span>
				<i class="fab fa-instagram"></i>					
        </a> -->
</template>
