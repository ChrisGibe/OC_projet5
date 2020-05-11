<template>
  <div class="container">
    <div>
      <h2>Choisissez un auteur</h2>
      <select id="autorSelect" class="custom-select">
        <option value="perceval">Perceval, chevalier de la table ronde</option>
        <option value="karadoc">Karadoc, chevalier de la table ronde</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectItem',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  width: 50%;
  height: auto;
}

h2 {
  font-size: 1.8em;
}

select {
  border: none;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #929090;
  color: #2c3e50;
  cursor: pointer;
  font-family: inherit;
  font-size:18px;
  font-weight: 700;
  padding: 15px;
}

.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

@media screen and (max-width: 800px) {
  .container {
    display: block;
    padding-right: 0;
    width: 100%;
  }
}
</style>
