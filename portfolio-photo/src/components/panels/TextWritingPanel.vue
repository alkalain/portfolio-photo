<template>
    <div class="grid-rows-3">
    <header>
        <slot class="" name="header"></slot>
    </header>
    <main name="main">
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>

</template>