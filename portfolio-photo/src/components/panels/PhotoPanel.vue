<!-- 
    Todo :
        - bind the slot component in TheGalary with the 2 dimensional array
        - and with the equipement panel

    <div class="container">
        
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="image">
                <img 
                :class="imageClass"
                :src="image" 
                :alt="imageName">
            </slot>
            <slot name="default">
                <p>{{ imageDescription }}</p>
            </slot>
        </main>
        <footer>
        <slot name="footer"></slot>
        </footer>
    </div>
-->

<script>
export default{
props:{
    imageSrc:Object,
    imageDescription:String,
    imageName:String,
    imageClass:String
}
}
</script>
<template>
    <div class="container">
        
        <p>{{ imageDescription }}</p>
        <img 
        :class="imageClass"
        :src="imageSrc" 
        :alt="imageName">
    </div>
</template>