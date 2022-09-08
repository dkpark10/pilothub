<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";

export default defineComponent({
  name: "app",
  components: {
    Header,
  },
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

body {
  background-color: #ededed;
}

button {
  border: none;
  background-color: transparent;
}
</style>
