<template>
  <div class="container">
    <div id="inlineRadio">
      <h2>Nombre de citations</h2>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" value="1" checked />1
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" value="2" required />2
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" value="3" required />3
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" value="4" required />4
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" value="5" required />5
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
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
  width: 50%;
  height: auto;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 40px;
}

label {
  margin: 10px;
}

input[type=radio] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    margin-right: 2px;
}

input[type=radio] {
    cursor: pointer;
    border-radius: 4px;
    height: 15px;
    width: 15px;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 2px 5px 5px #929090;
}

input[type="radio"]:checked {
  background-color: #2c3e50;
  transition-duration: 400ms;
}

@media screen and (max-width: 800px) {
  .container {
    display: block;
    padding-left: 0;
    width: 100%;
  }
}
</style>
