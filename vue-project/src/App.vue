<script setup>
const name = 'yorch'
const styleColor = 'color: blue';
</script>

<template>
  <h1>Hola {{ name }}</h1>
  <h2 :style=" styleColor ">yorchz</h2>
</template>

<style>
h1 {
  color: red ;

}
</style>