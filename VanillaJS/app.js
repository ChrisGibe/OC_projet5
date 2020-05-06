const citationsPerceval1 = [
  'Au printemps,',
  "Dans le Languedoc, ils m'appellent Provençal",
  "Dans la vie, j'avais deux ennemis :",
  "J'voudrais pas faire ma raclette, ",
  'Si on faisait le coup du bouclier humain ?',
  "Si Joseph d'Arimathie a pas été trop con,",
  'Putain,',
  'C’est pour ça',
  'Faut arrêter ces conneries de nord et de sud !',
  ' Une fois, à une exécution,',
];
const citationsPerceval2 = [
  'j’aime bien pisser du haut des remparts au lever du soleil..., ',
  'le vocabulaire et les épinards,',
  'par exemple, Sire, Léodagan et moi on fait semblant de vous prendre en otage',
  'vous pouvez être sûr que le Graal,',
  'c’est un vrai piège à cons c’t’histoire-là,',
  'une fois pour toutes, le nord, suivant comment on est tourné,',
];
const citationsPerceval3 = [
  "c'est pas faux!.",
  'y’a une belle vue !',
  "mais c'est moi qui m'suis gouré en disant mon nom.",
  "enfin tous les chiffres impairs jusqu'à 22.",
  ' on vous met une dague sous le cou et on traverse le camp adverse en gueulant : Bougez pas, bougez pas ou on bute le roi!',
  "c'est un bocal à anchois.",
  'en plein dans sa mouille !',
  'j’lis jamais rien.',
  'en plus j’sais pas lire.',
  " je m'approche d'une fille. Pour rigoler, je lui fais : « Vous êtes de la famille du pendu ? »",
];

const citationsKaradoc1 = [
  "C'est normal, c'est en se cassant la gueule qu'on apprend à marcher.",
  'C’est compliqué',
  'La joie de vivre et le jambon',
  'Mais y a rien à développer !',
  'Le gras,',
  'Les chiffres',
  'Le tavernier',
];
const citationsKaradoc2 = [
  'ça y est… je vois trouble.',
  "combien de fois j'ai failli m'étouffer avec un os de lapin,",
  "c'est de la merde, c'est de la merde, c'est tout !",
  'moi, on me sert ça dans une auberge,',
  "c'était sa sœur,",
];
const citationsKaradoc3 = [
  "il faut jamais se laisser abattre par un échec, c'est ça le secret.",
  'mais c’est compliqué !',
  "y'a pas trente-six recettes du bonheur !",
  "il s'prend une quiche dans sa tête !",
  'c’est le manque de gras, je me dessèche.',
  "c'est la vie !",
  "c'est pas une science exacte figurez-vous!",
  'ça change tout !',
  "bonjour l'approche !",
];

/**
 * Generates all the quotes
*/
function creationQuotes() {
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
          citationsPerceval1,
        )} ${randomQuote(citationsPerceval2)} ${randomQuote(
          citationsPerceval3,
        )}`;
      } else if (autorSelected === 'karadoc') {
        document.getElementById(`citation${i}`).innerHTML = `${randomQuote(
          citationsKaradoc1,
        )} ${randomQuote(citationsKaradoc2)} ${randomQuote(citationsKaradoc3)}`;
      }
    }
  }

  createBlocksQuote();

  document.getElementById('divBoutton1').style.display = 'none';
  document.getElementById('divBoutton2').style.display = 'block';
}

/**
 * Remove all the quotes
 */
function removeQuotes() {
  document.getElementById('divBoutton1').style.display = 'block';
  document.getElementById('divBoutton2').style.display = 'none';

  const citationsBloque = document.getElementById('citationsBloque');
  const resetBlock = document.querySelectorAll('#citationsBloque blockquote');

  for (let i = 0, r = resetBlock.length; i < r; i += 1) {
    citationsBloque.removeChild(resetBlock[i]);
  }
}
