<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue";

const title=ref('Chrome Extension Demo')
const version=ref('1.0.0')

const test=()=>{
  alert('test for chrome extension')
}
</script>

<template>
  <div id="container">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <span id="title">{{title+' v'+version}} </span>
    </header>

    <RouterView />

    <input type="button" value="测试" @click="test">

  </div>
</template>

<style scoped>
#container {
  width: 500px;
  height: 350px;

  padding: 5px;
}
nav{
  display: flex;
  justify-content: space-around;
}
#title{
  font-size: 30px;
  font-weight: bold;
}
</style>
