<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <nav class="menu">
    <RouterLink class="nav_link" active-class="nav--active" to="/">Доходы</RouterLink>
    <RouterLink class="nav_link" active-class="nav--active" to="/ExpensView">Расходы</RouterLink>
    <RouterLink class="nav_link" active-class="nav--active" to="/AllView">Общее</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.menu {
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #639f85;
  padding-top: 5px;
  padding-bottom: 10px;
  border-radius: 15px 15px 0 0;
}
.nav--active {
  border-bottom: 1px solid white;
}
.nav_link {
  width: 33.4%;
  text-align: center;
  color: white;
  padding: 10px;
  padding-bottom: 5px;
  font-size: 18px;
  margin-left: 10px;
  margin-right: 10px;
}
.nav_link--active {
  border-bottom: 2px solid white;
}
</style>
