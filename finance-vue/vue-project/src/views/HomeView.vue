<script setup>
import Header from '@/components/header.vue'
import Tabl from '@/components/tabl.vue'
import Circle from '@/components/circle.vue'
import list from '@/components/list.vue'
import { computed, onMounted, ref } from 'vue'


const tabl1 = ref([])
const searchOne = ref()
const searchTwo = ref('')
const allPrice = ref()
const inputValue = (event) => {
    searchOne.value = Number(event.target.value)
    
}
const inputValue2 = (event) => {
    searchTwo.value = event.target.value
}

const allPriceSum = () => {
  allPrice.value = tabl1.value.reduce((acc, currentValue) => acc + +currentValue.price, 0);
  return localStorage.setItem('AllPrice', JSON.stringify(allPrice.value))
  
}
const deleteItem = (item) => {
  tabl1.value.splice(tabl1.value.indexOf(item), 1) 
  localStorage.setItem('setItem', JSON.stringify(tabl1.value))
  allPriceSum()
}
onMounted(() => {
  if(localStorage.getItem('setItem')) {
    tabl1.value = JSON.parse(localStorage.getItem('setItem'));
    allPrice.value = JSON.parse(localStorage.getItem('AllPrice'));
  }
})


const addToClick = () => {
  const tabl2 = {
    id: tabl1.value.length,
    price: searchOne.value,
    name: searchTwo.value,
    isFavorite: false,
  }
  tabl1.value.push(tabl2)
  console.log(tabl1.value);
  localStorage.setItem('setItem', JSON.stringify(tabl1.value))
}
</script>

<template>
  <main>
    <Header />
    <div class="container">
      <Tabl title="дохода" title2="доход" :allPriceSum="allPriceSum" :tabl1="tabl1" :addToClick="addToClick" :inputValue="inputValue" :searchOne="searchOne" :inputValue2="inputValue2" :searchTwo="searchTwo" />
      <list :tabl1="tabl1" :deleteItem="deleteItem" />
    </div>
   
    <Circle title="Доход" :allPrice="allPrice" /> 
  </main>
</template>
