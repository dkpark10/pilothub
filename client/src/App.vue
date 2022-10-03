<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style: none;
  vertical-align: baseline;
}

h1 {
  color: red;
}

body {
  background-color: #eef0f2;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: $nav-font-color;
}
</style>
