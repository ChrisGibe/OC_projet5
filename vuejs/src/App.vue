<template>
  <div id="app">
    <Header title="Génarateur de citations : Version VueJS"/>
    <div class="block-1">
      <SelectItem/>
      <Checkbox/>
    </div>
    <Buttons/>
  </div>
</template>

<script>
import Header from './components/header.vue';
import SelectItem from './components/select.vue';
import Checkbox from './components/checkbox.vue';
import Buttons from './components/buttons.vue';

export default {
  name: 'App',
  components: {
    Header,
    SelectItem,
    Checkbox,
    Buttons,
  },
};
</script>

<style>
html {
  background-color: #d5ddeb;
}

body {
  margin: 0;
  background-color: #d5ddeb;
  width: 100%;
  height: 100vh;
}

.block-1 {
  display: flex;
}

#app {
  font-family: Open, sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
