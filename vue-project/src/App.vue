<script setup>
import {ref, computed } from 'vue';
const name = 'yorch'
const counter = ref(0); 


const increment = () => counter.value++;


const decrement = () => counter.value--;

const reset = () => (counter.value = 0);

const arrayFavs = ref([]);

const add = () =>{
   arrayFavs.value.push(counter.value);
}

const bloqButton = computed(() => {
  const numSearch = arrayFavs.value.find(num => num === counter.value)
  if(numSearch ===0){
    return true;
  }
  return numSearch ? true : false;
});

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
  <div class="container text-center mt-3">
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :class="classCounter">{{ counter }}</h2>
  <div class="btn-group">
    <button @click="increment" class="btn btn-success">Incremento</button>
    <button @click="decrement" class="btn btn-danger">Decremento</button>
    <button @click="reset" class="btn btn-secondary">Resetear</button>
    <button @click="add" :disabled="bloqButton" class="btn btn-primary">Agregar

    </button>
  </div>
  
  <ul class="list-group mt-4">
    <li
      class="list-group-item"
      v-for="(num, index) in arrayFavs"
      :key="index"
    >
      {{ num }}
    </li>
  </ul>

  </div> 
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