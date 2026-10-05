<script setup>
const name = 'yorch'
const styleColor = 'color: blue';
const arrayColores = ['blue', 'red','purple']
const activo = true;
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2>{{ arrayColores }}</h2>
  <h2 :style="`color: ${arrayColores[2]}` ">yorchz</h2>
  <h2>{{ activo ? 'estoy poniendome activo ' : 'estoy inactivo' }}
  </h2>
  <p v-if="!activo === true">Estoy inactivo</p>
  <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy jodido </p>

</template>
 
<style>
h1 {
  color: red ;

}
</style>