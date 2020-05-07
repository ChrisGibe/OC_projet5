<template>
  <div>
    <div id="divBoutton1">
      <div>
        <button
          onclick="creationQuotes()"
          type="button"
          class="btn btn-secondary btn-lg"
          id="generate"
        >
          Générer
        </button>
      </div>
    </div>
    <div class="row" id="divBoutton2">
      <div>
        <button onclick="removeQuotes()"
                type="button"
                class="btn btn-secondary btn-lg"
                id="reset"
        >
          Recommencer
        </button>
      </div>
    </div>
    <div id="citationsBloque"></div>
  </div>
</template>

<script>
export default {
  name: 'Quotes',
};
</script>

<style scoped>
#divBoutton2 {
    display: none;
}
</style>
