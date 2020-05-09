<template>
  <div class="container-button">
    <div id="divBoutton1">
      <div>
        <button
          type="button"
          class="button"
          id="generate"
          @click="generateQuotes()"
        >
          Générer
        </button>
      </div>
    </div>
    <div id="divBoutton2">
      <div>
        <button
                type="button"
                class="button"
                id="reset"
                @click="removeQuotes()"
        >
          Recommencer
        </button>
      </div>
    </div>
    <div id="citationsBloque"></div>
  </div>
</template>

<script>
const allQuotes = require('../assets/quotes.json');

export default {
  name: 'Buttons',
  methods: {
    generateQuotes() {
      const inputs = document.querySelector('input[type=radio]:checked');

      function randomQuote(array) {
        return array[Math.floor(Math.random() * array.length)];
      }

      function createBlocksQuote() {
        for (let i = 0; i < inputs.value; i += 1) {
          const citationsBloque = document.getElementById('citationsBloque');
          const block = document.createElement('blockquote');
          const paragraph = document.createElement('p');

          paragraph.id = `citation${i}`;

          citationsBloque.appendChild(block);
          block.appendChild(paragraph);

          const autorSelected = document.querySelector('#autorSelect').value;

          if (autorSelected === 'perceval') {
            document.getElementById(`citation${i}`).innerHTML = `${randomQuote(
              allQuotes.perceval[1],
            )} ${randomQuote(allQuotes.perceval[2])} ${randomQuote(
              allQuotes.perceval[3],
            )}`;
          } else if (autorSelected === 'karadoc') {
            document.getElementById(`citation${i}`).innerHTML = `${randomQuote(
              allQuotes.karadoc[1],
            )} ${randomQuote(allQuotes.karadoc[2])} ${randomQuote(allQuotes.karadoc[3])}`;
          }
        }
      }

      createBlocksQuote();

      document.body.height = '100%';
      document.getElementById('divBoutton1').style.display = 'none';
      document.getElementById('divBoutton2').style.display = 'block';
    },
    removeQuotes() {
      document.getElementById('divBoutton1').style.display = 'block';
      document.getElementById('divBoutton2').style.display = 'none';

      const citationsBloque = document.getElementById('citationsBloque');
      const resetBlock = document.querySelectorAll('#citationsBloque blockquote');

      for (let i = 0, r = resetBlock.length; i < r; i += 1) {
        citationsBloque.removeChild(resetBlock[i]);
      }
    },
  },
};
</script>

<style>
.container-button {
    display: block;
    margin-top: 50px;
}

#divBoutton2 {
    display: none;
}

#citationbloque {
    display: block;
}

.button {
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px #929090;
  color: #2c3e50;
  cursor: pointer;
  font-family: inherit;
  font-size:16px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}

.button:hover {
  box-shadow: 0 2px #929090;
  top: 2px;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
blockquote {
  width: 60%;
  height: auto;
  font-size: 1.2em;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #78C0A8 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#78C0A8;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}
</style>
