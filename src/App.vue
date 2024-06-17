<script setup lang="ts">
import fs from "node:fs"; // we should not be able to import modules that cannot run in the browser
import useCounter from "~/Composables/counter"; // we should be able to import via path alias

console.log("Hello world");
</script>
<template>
    Hello world
</template>