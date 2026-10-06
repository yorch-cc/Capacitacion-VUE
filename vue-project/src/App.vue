<script setup>
const name = 'yorch'

//metodo -- methods  
const handleClick = (message) => {
  console.log(message)

}

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>

  <button v-on:click.right.prevent="handleClick('click right')">Activame right</button>
  <button @click.left="handleClick('click left')">Activame left</button> 
  <button @click.middle   ="handleClick('click middle')">Activame middle</button>


  
  
    


</template>
 
<style>
h1 {
  color: red ;

}
</style>