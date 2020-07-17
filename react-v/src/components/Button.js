import React, { useState } from 'react'
import './Button.css'

const allQuotes = require('../assets/quotes.json');

function addNewQuotes(arrayOfQuotes, myState, mySetState) {
    let newQuoteText;
    const inputs = document.querySelector('input[type=radio]:checked');

    function randomQuote(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
      for (let i = 0; i < inputs.value; i += 1) {
        const autorSelected = document.querySelector('#autorSelect').value;

        if (autorSelected === 'perceval') {
          newQuoteText = `${randomQuote(
            arrayOfQuotes.perceval[1],
          )} ${randomQuote(arrayOfQuotes.perceval[2])} ${randomQuote(
            arrayOfQuotes.perceval[3],
          )}`;
        } else if (autorSelected === 'karadoc') {
          newQuoteText = `${randomQuote(
            arrayOfQuotes.karadoc[1],
          )} ${randomQuote(arrayOfQuotes.karadoc[2])} ${randomQuote(arrayOfQuotes.karadoc[3])}`;
        }
        mySetState(myState.push(newQuoteText))
      }

      myState.map(quote => {
          let ul = document.getElementById('QuotesListe')
          let li = document.createElement('li')
          li.innerHTML = quote
          ul.appendChild(li)
      })

      document.body.height = '100%';
      document.getElementById('divBoutton1').style.display = 'none';
      document.getElementById('divBoutton2').style.display = 'block';
}

function removeQuotes (myState, mySetState) {
    document.getElementById('divBoutton1').style.display = 'block';
    document.getElementById('divBoutton2').style.display = 'none';

    let ul = document.querySelector('#QuotesListe');
    let li = document.querySelectorAll('li');

    for (let i = 0; i < li.length; i += 1) {
        ul.removeChild(ul.firstElementChild)
        mySetState(myState = [])
    }
}

function Button () {
    const [quotes, setQuotes] = useState([])

    return(
        <div className="container-button">
            <div id="divBoutton1">
            <div>
                <button
                type="button"
                className="button"
                id="generate"
                onClick={() => addNewQuotes(allQuotes, quotes, setQuotes) }
                >
                Générer
                </button>
            </div>
            </div>
            <div id="divBoutton2">
            <div>
                <button
                type="button"
                className="button"
                id="reset"
                onClick={() => removeQuotes(quotes, setQuotes) }
                >
                Recommencer
                </button>
            </div>
            </div>
            <ul id="QuotesListe">
            </ul>
    </div>
    )
}

export default Button