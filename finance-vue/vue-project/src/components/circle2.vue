<script setup>
defineProps({
  allPrice2: Number,
  title: String,
})

</script>

<template>
  <div class="container">
    <div class="circle">
      <div class="circle-2">
        <div class="circle_3">
          <p class="circle_text">{{title}}: {{allPrice2 ? allPrice2 : '0'}} руб.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.circle {
  z-index: -1;
  max-width: 300px;
  width: 100%;
  height: 300px;
  margin-bottom: 100px !important;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  border-radius: 50%;
  background-color: #3d454a;
  justify-content: center;
  align-items: center;
  position: relative;
}
.circle-2 {
  background-color: #fff;
  max-width: 210px;
  width: 100%;
  height: 210px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
}
.circle_3 {
  background-color: #fff;
  max-width: 190px;
  width: 100%;
  height: 190px;
  border: 2px dashed rgb(0, 0, 0);
  border-radius: 50%;
}
.circle_text {
  position: absolute;
  top: 46%;
  left: 50%;
  font-size: 17px;
  transform: translateX(-50%);
}
</style>
