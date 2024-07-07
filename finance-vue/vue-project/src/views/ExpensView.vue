<script setup>
import Header from '@/components/header.vue'
import Tabl from '@/components/tabl.vue'
import Circle2 from '@/components/circle2.vue'
import list2 from '@/components/list2.vue'
import { computed, ref, onMounted } from 'vue'

const tabl3 = ref([])
const searchOne = ref()
const searchTwo = ref('')
const allPrice2 = ref()
const inputValue = (event) => {
    searchOne.value = Number(event.target.value)
}
const inputValue2 = (event) => {
    searchTwo.value = event.target.value
}

const allPriceSum = () => {
  allPrice2.value = tabl3.value.reduce((acc, currentValue) => acc + +currentValue.price, 0);
  return localStorage.setItem('AllPrice2', JSON.stringify(allPrice2.value))
}

const deleteItem2 = (item) => {
  tabl3.value.splice(tabl3.value.indexOf(item), 1) 
  localStorage.setItem('setItem2', JSON.stringify(tabl3.value))
  allPriceSum()
}
onMounted(() => {
  if(localStorage.getItem('setItem2')) {
    tabl3.value = JSON.parse(localStorage.getItem('setItem2'));
    allPrice2.value = JSON.parse(localStorage.getItem('AllPrice2'));
  }
})

const addToClick = () => {
 const tabl2 = {
    id: tabl3.value.length,
    price: searchOne.value,
    name: searchTwo.value,
    isFavorite: false,
  }
  tabl3.value.push(tabl2)
  console.log(tabl3.value);
  localStorage.setItem('setItem2', JSON.stringify(tabl3.value))
  
}

</script>

<template>
  <main>
    <Header />
    <div class="container">
      <Tabl title="расхода" title2="расход" :allPriceSum="allPriceSum" :tabl3="tabl3" :addToClick="addToClick" :inputValue="inputValue" :searchOne="searchOne" :inputValue2="inputValue2" :searchTwo="searchTwo" />
      <list2 :tabl3="tabl3" :deleteItem2="deleteItem2" />
    </div>
   
    <Circle2 title="Расход" :allPrice2="allPrice2" />
  </main>
</template>

