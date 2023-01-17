// Recipes

// export const recipes = [
//   {
//     name: 'Arednellian Pickled Herring',
//     ingredients: ['herring', 'lemon', 'onion', 'garlic', 'any herb']
//   },
//   {
//     name: 'Fish Sandwich',
//     ingredients: ['fish', 'wheat']
//   },
//   {
//     name: 'Grilled Coconut',
//     ingredients: ['coconut']
//   },
//   {
//     name: 'Apple Pie',
//     quantities: '1 x Apple, 1 x Wheat',
//     ingredients: ['apples', 'wheat']
//   }
// ];

export interface Recipe {
  name: string;
  ingredients: string[];
  quantities: string;
}

export const recipes: Recipe[] = [
  {
    name: 'Grilled Coconut',
    quantities: '1 x Coconut',
    ingredients: ['coconut']
  },
  {
    name: 'Apple Pie',
    quantities: '1 x Apple, 1 x Wheat',
    ingredients: ['apples', 'wheat']
  }
];