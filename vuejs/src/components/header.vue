<template>
  <div>
    <h1>{{ title }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  font-weight: bold;
}

img {
  width: 100px;
}
</style>
