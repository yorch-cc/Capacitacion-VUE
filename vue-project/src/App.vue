<script setup>
import {ref, computed } from 'vue';
const name = 'yorch'
const counter = ref(0); 


const increment = () => counter.value++;


const decrement = () => counter.value--;

const reset = () => (counter.value = 0);

const classCounter = computed(() => { 
  if(counter.value === 0){
    return 'zero'
  }
  if(counter.value > 0 ){
    return 'positive'
  }

  if(counter.value < 0){
    return 'negative'
  }

})
  


</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :class="classCounter">{{ counter }}</h2>
   <button @click="increment">Incremento</button>
  <button @click="decrement">Decremento</button>
  <button @click ="reset">Resetear</button>

  
</template>
 
<style>
h1 {
  color: red ;

}

.positive {
    color:green;
  }

  .negative {
    color: red;
  }
  
  .zero {
    color:purple
  }
</style>