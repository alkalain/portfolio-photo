<!-- 
    Todo :
        - bind the slot component in TheGalary with the 2 dimensional array
        - and with the equipement panel
-->


<template>
    <div class="bg-blue-300 p-2 rounded-2xl  ">
        <header class="flex justify-center max-w-full
        rounded-2xl p-2
        ">
            <slot name="PhotoFileHeader"></slot>
        </header>
        <main class="text-center text-xl font-semibold">
            <slot name="PhotoTitle"></slot>
        </main>
        <footer class="text-center">
            <slot name="PhotoDescription" ></slot>
        </footer>
    </div>
</template>