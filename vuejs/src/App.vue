<template>
  <div id="app">
    <Header title="Génarateur de citations : Version VueJS"/>
    <Select auteur_1="Perceval, chevalier de la table ronde"
            auteur_2="Karadoc, chevalier de la table ronde"/>
    <Checkbox/>
    <Quotes/>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Select from './components/select.vue';
import Checkbox from './components/checkbox.vue';
import Quotes from './components/quotes.vue';

export default {
  name: 'App',
  components: {
    Header,
    Select,
    Checkbox,
    Quotes,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
