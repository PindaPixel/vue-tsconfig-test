<script setup lang="ts">
import { describe, it } from "node:test"; // should not be able to import modules that cannot run in the browser
import useCounter from "~/config-test/counter"; // we should be able to import via path alias

console.log("Hello world");
</script>
<template>
    Hello world
</template>