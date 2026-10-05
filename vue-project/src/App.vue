<script setup>
const name = 'yorch'
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <ul>
    <li v-for="(fruta, index) in arrayFrutas":key="index">
  {{index}}-{{ fruta  }}
      </li>
    </ul>


</template>
 
<style>
h1 {
  color: red ;

}
</style>