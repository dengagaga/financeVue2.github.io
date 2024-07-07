<script setup>
defineProps({
  searchOne:Number,
  searchTwo:String,
  addToClick:Function,
  inputValue:Function,
  inputValue2:Function,
  allPriceSum:Function,
  tabl1:Array,
  tabl3:Array,
  title:String,
  title2:String,
})
</script>

<template>
  <div>
    <h1 class="title-1_setting">ГЛАВНАЯ</h1>
    <form action="" class="form">
      <label for="input1" class="label">
        Сумма {{title}}
        <input @input="inputValue" type="text" class="input1 input" />
      </label>
      <label for="input1" class="label">
        Откуда пришел {{title2}}
        <input @input="inputValue2" type="text" class="input2 input" />
      </label>
      <button @click.prevent="addToClick" @click="allPriceSum" class="form_btn">Посчитать</button>
    </form>
  </div>
    
 
</template>
<style scoped>
.p {
  color: black;
}
.title-1_setting {
  font-size: 24px;
  margin-top: -90px;
  text-align: center;
  color: white;
  margin-bottom: 15px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  /* max-width: 300px; */
  margin-bottom: 20px;
  /* background-color: #434f3f; */
  background-color: #3d454a;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 0px;
}
.label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 250px;
  width: 100%;

  position: relative;
}
.label-2 {
  padding-left: 30px;
}
.label-svg {
  position: absolute;
  left: -15px;
  top: 24px;
}
.input {
  border: 1px solid white;
  max-width: 250px;
  width: 100%;
  padding: 6px 8px;
  border-radius: 5px;
}
.form_btn {
  margin-top: 10px;
  border: 1px solid white;
  border-radius: 5px;
  max-width: 150px;
  width: 100%;
  padding: 5px 10px;
}
</style>
