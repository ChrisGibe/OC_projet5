<template>
  <div class="container">
    <div>
      <h2>Choisissez un auteur</h2>
      <select id="autorSelect">
        <option value="perceval">{{ auteur_1 }}</option>
        <option value="karadoc">{{ auteur_2 }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    auteur_1: String,
    auteur_2: String,
  },
};
</script>

<style scoped>
.container {
  display: block;
  float: left;
  width: 50%;
  height: auto;
}

h5 {
  font-size: 1.8em;
  font-weight: bold;
}

@media screen and (max-width: 800px) {
  .container {
    width: 100%;
  }
}
</style>
