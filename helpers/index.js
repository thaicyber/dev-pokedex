/* ------------------------------------------------------ */
/*                    Helper Functions                    */
/* ------------------------------------------------------ */
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const capitalizeArray = (strings) =>
  strings.map((string) => capitalize(string));

export const colorMap = {
  bug: 'olive',
  dark: 'black',
  dragon: 'blue',
  electric: 'yellow',
  fairy: 'pink',
  fighting: 'red',
  fire: 'orange',
  flying: 'blue',
  ghost: 'purple',
  grass: 'green',
  ground: 'brown',
  ice: 'teal',
  normal: 'grey',
  poison: 'purple',
  psychic: 'pink',
  rock: 'grey',
  steel: 'grey',
  water: 'blue'
};
