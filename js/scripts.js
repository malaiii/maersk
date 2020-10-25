/**
 * Variable definition for the cards module
 */
const numberOfCards = 9,
    colors = ["#000000", "#2B8EAD", "#333333", "#6F98A8", "#EEEEEE", "#BFBFBF", "#ABABAB", "#2F454E", "#72C3DC" ];
let cards = createCards(numberOfCards,colors);

/**
 * Returns void, Function for render the cards to the DOM.
 *
 * @param {cards} cards array of objects.
 */
const renderCard = (cards) => {
    let cardsContainer = document.getElementById('cardsContainer'),
        sectionContainer = document.createElement('section'),
        sectionElem;
    cardsContainer.innerHTML = '';
    cards.map((card, i) => {
        const attrs = {
            "class": "card",
            "style": `background-color:${card.color};border-color: ${card.color}`
        }
        sectionElem = sectionContainer.cloneNode();
        sectionElem.textContent = card.num;
        setAttributes(cardsContainer.appendChild(sectionElem),attrs);
    });
}

/**
 * Returns void, Function for render the cards to the DOM.
 *
 * @param {e} e DOM event object for onclick event.
 */
const shuffleCards = (e) => {
    cards = shuffle(cards);
    renderCard(cards);
}

/**
 * Returns void, Function for sort the shuffled cards.
 *
 * @param {e} e DOM event object for onclick event.
 */
const sortCards = (e) => {
    cards = sortFn(cards);
    renderCard(cards);
}


renderCard(cards);

