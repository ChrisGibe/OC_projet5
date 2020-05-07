<template>
  <div class="container">
    <div>
      <h2>Combien voulez-vous de citations ?</h2>
    </div>
    <div id="inlineRadio">
      <label class="checkbox-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" checked />1
      </label>
      <label class="checkbox-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" required />2
      </label>
      <label class="checkbox-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" required />3
      </label>
      <label class="checkbox-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" required />4
      </label>
      <label class="checkbox-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" required />5
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
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
