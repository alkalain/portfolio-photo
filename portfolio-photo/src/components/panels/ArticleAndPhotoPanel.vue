<template>
    <div class="bg-blue-300 p-2 rounded-2xl pb-[3%] max-[720px]:pb-0 ">
        <header class="pl-[3%] text-3xl text-center font-bold pb-2 " >
            <slot name="ArticleHeader"> articl header</slot>
        </header>
        <!-- modify container for responsive
            
         -->
        <div class="grid grid-cols-2 gap-x-[5%] max-[720px]:grid-rows-2 max-[720px]:grid-cols-1 max-[720xp]:pb-[5%]">
            <main class="pl-[5%] text-center text-xl font-medium max-[420px]:pb-[30%]">
                <slot name="ArticleCore"> article core</slot> 
            </main>
            <footer class="flex justify-center ">
                <slot name="ArticleFooter" > articl footer</slot>
            </footer>
        </div>
    </div>
</template>