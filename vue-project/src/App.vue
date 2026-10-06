<script setup>
const name = 'yorch'

//metodo -- methods  
const handleClick = (message) => {
  console.log(message)

}

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>

  <button v-on:click="handleClick('click 1')">Activame 1</button>
  <button @click="handleClick('click 2')">Activame 2</button>


  
  
    


</template>
 
<style>
h1 {
  color: red ;

}
</style>