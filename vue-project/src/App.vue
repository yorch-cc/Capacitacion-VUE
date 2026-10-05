<script setup>
const name = 'yorch'
const arrayFrutas = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>

  <ul>
    <template  v-for="value in arrayFrutas" 
      :key="value.name"> 
      <li v-if="value.stock > 0"> {{ value.name }} - {{ value.price }}
        
      </li>
    </template>
    </ul>


</template>
 
<style>
h1 {
  color: red ;

}
</style>