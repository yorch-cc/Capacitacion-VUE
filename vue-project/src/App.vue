<script setup>
const name = 'yorch'

//metodo -- methods  
const handleClick = () => {
  console.log('missclick')

}

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>

  <button v-on:click="handleClick">Activame 1</button>
  <button @click="handleClick">Activame 2</button>


  
  
    


</template>
 
<style>
h1 {
  color: red ;

}
</style>