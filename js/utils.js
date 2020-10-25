/**
 * Returns {num:1,color:"#FFFFFF"} from the nth count.
 *
 * @param {number} n The number to loop.
 * @param {array} colors Number of the color codes.
 */
const createCards = (n,colors) => new Array(n)
    .fill()
    .map((__value, index) => ({ num:index+1, color: colors[index]}));


/**
 * Returns void, Function for add attributes the dom Elements.
 *
 * @param {elem} HTML Element.
 * @param {object} attrs for add styles and class/id to specific elemets.
 */
const setAttributes = (elem, attrs ) => {
    for(var key in attrs) {
        elem.setAttribute(key, attrs[key]);
    }
  }


/**
 * Returns array, Function for shufflled array of objects
 *
 * @param {cards} cards array of objects.
 */
const shuffle = cards => cards
  .map(card => [Math.random(), card])
  .sort()
  .map(card => card[1]);

  
/**
 * Returns array, Function for sorted array of objects. It would sort by num attr.
 *
 * @param {cards} cards array of objects..
 */  
const sortFn = cards => cards.sort((cardA, cardB) => (cardA.num > cardB.num) ? 1 : -1)
