<template>
  <div class="container-button">
    <div id="divBoutton1">
      <div>
        <button
          type="button"
          class="button"
          id="generate"
          @click="addNewQuotes()"
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
    <ul id="QuotesListe">
      <li
        v-for="(quote) in quotes"
        v-bind:key="quote.id"
        v-text="quote.text"
      ></li>
    </ul>
  </div>
</template>

<script scoped>
const allQuotes = require('../assets/quotes.json');

export default {
  name: 'Buttons',
  data() {
    return {
      newQuoteText: '',
      nextQuoteId: 0,
      quotes: [],
    };
  },
  methods: {
    addNewQuotes() {
      const inputs = document.querySelector('input[type=radio]:checked');

      function randomQuote(array) {
        return array[Math.floor(Math.random() * array.length)];
      }

      for (let i = 0; i < inputs.value; i += 1) {
        const autorSelected = document.querySelector('#autorSelect').value;

        if (autorSelected === 'perceval') {
          this.newQuoteText = `${randomQuote(
            allQuotes.perceval[1],
          )} ${randomQuote(allQuotes.perceval[2])} ${randomQuote(
            allQuotes.perceval[3],
          )}`;
        } else if (autorSelected === 'karadoc') {
          this.newQuoteText = `${randomQuote(
            allQuotes.karadoc[1],
          )} ${randomQuote(allQuotes.karadoc[2])} ${randomQuote(allQuotes.karadoc[3])}`;
        }

        this.quotes.push({
          id: this.nextQuoteId += 1,
          text: this.newQuoteText,
        });
      }
      document.body.height = '100%';
      document.getElementById('divBoutton1').style.display = 'none';
      document.getElementById('divBoutton2').style.display = 'block';
    },
    removeQuotes() {
      document.getElementById('divBoutton1').style.display = 'block';
      document.getElementById('divBoutton2').style.display = 'none';

      for (let i = 0; i < this.quotes.length; i += 1) {
        this.quotes.splice(0);
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

#QuotesListe {
  padding-left: 0;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
li {
  list-style-type: none;
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

li::before{
  font-family:Arial;
  content: "\201C";
  color:#78C0A8;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}
</style>
