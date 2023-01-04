import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: '0 auto',
    marginTop: theme.spacing(10),
    backgroundColor: '#fefefe',
  },
  select: {
    marginRight: theme.spacing(2)
  }
}));

const RecipeCard = () => {
  const classes = useStyles();
  const [meal, setMeal] = React.useState('');
  const [mealFound, setMealFound] = React.useState(false);
  const [vegetables, setVegetables] = React.useState('');
  const [fruit, setFruit] = React.useState('');
  const [herbsAndSpices, setHerbsAndSpices] = React.useState('');
  const [fish, setFish] = React.useState('');
  const [seafood, setSeafood] = React.useState('');
  const [grains, setGrains] = React.useState('');

  const recipes = [  
  {    
    name: 'Arednellian Pickled Herring',    
    ingredients: ['herring', 'lemon', 'onion', 'garlic', 'any herb']
  },
  {
    name: 'Bell Pepper Puffs',
    ingredients: ['bell pepper', 'eggs', 'cheese']
  },
  {
    name: 'Cheese Platter',
    ingredients: ['cheese']
  },
  {
    name: 'Chili Pepper Puffs',
    ingredients: ['chilis', 'eggs', 'cheese']
  },
  {
    name: 'Crackers',
    ingredients: ['wheat']
  },
  {
    name: 'Creamy Soup',
    ingredients: ['milk', 'any vegetable', 'potato', 'any herb']
  },
  {
    name: 'Crudités',
    ingredients: ['any vegetable']
  },
  {
    name: 'Eggplant Puffs',
    ingredients: ['eggplant', 'eggs', 'cheese']
  },
  {
    name: 'French Fries',
    ingredients: ['canola', 'potato']
  },
  {
    name: 'Gazpacho',
    ingredients: ['onion', 'tomato', 'cucumber', 'any herb']
  },
  {
    name: 'Green Salad',
    ingredients: ['any vegetable', 'lettuce']
  },
  {
    name: 'Grilled Vegetables',
    ingredients: ['any vegetable']
  },
  {
    name: 'Grilled Veggie Platter',
    ingredients: ['any vegetable', 'any vegetable', 'any vegetable']
  },
  {
    name: 'Hard-Boiled Eggs',
    ingredients: ['eggs']
  },
  {
    name: 'Large Seafood Platter',
    ingredients: ['any seafood', 'any seafood', 'any seafood', 'any seafood', 'lemon']
  },
  {
    name: 'Marinated Herring',
    ingredients: ['herring', 'onion']
  },
  {
    name: 'Okra Soup',
    ingredients: ['okra']
  },
  {
    name: 'Onion Puffs',
    ingredients: ['onion', 'eggs', 'cheese']
  },
  {
    name: 'Oyster Platter',
    ingredients: ['oyster', 'lemon']
  },
  {
    name: 'Pickled Herring',
    ingredients: ['herring', 'lemon', 'onion', 'herb']
  },
  {
    name: 'Potato Leek Soup',
    ingredients: ['leak', 'potato', 'milk', 'onion', 'garlic']
  },
  {
    name: 'Potato Puffs',
    ingredients: ['potato', 'eggs', 'cheese']
  },
  {
    name: 'Pottage',
    ingredients: ['potato', 'any vegetable', 'any herb']
  }
];

const determineMeal = () => {
  const selectedIngredients = [vegetables, fruit, herbsAndSpices, fish, seafood, grains];

  // Flatten the array of selected ingredients
  const flatSelectedIngredients = selectedIngredients.flat();

  // Find the first recipe that matches the selected ingredients
  const matchingRecipe = recipes.find((recipe) => {
    return recipe.ingredients.every((ingredient) => flatSelectedIngredients.includes(ingredient));
  });

  if (matchingRecipe) {
    setMeal(matchingRecipe.name);
    setMealFound(true);
  } else {
    setMeal('No match');
    setMealFound(false);
  }
};


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Ingredients
        </Typography>
        <FormControl variant='outlined' fullWidth label="Vegetables" style={{ padding: '1rem' }}>
        <Select
          className={classes.select}
          value={vegetables}
          onChange={(event) => setVegetables(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Vegetables</MenuItem>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="lettuce">Lettuce</MenuItem>
          <MenuItem value="carrots">Carrots</MenuItem>
          <MenuItem value="spinach">Spinach</MenuItem>
          <MenuItem value="zuccini">Zuccini</MenuItem>
          <MenuItem value="broccoli">Broccoli</MenuItem>
          <MenuItem value="onion">Onion</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant='outlined' fullWidth  label="Fruit" style={{ padding: '1rem' }}>
        <Select
          className={classes.select}
          value={fruit}
          onChange={(event) => setFruit(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Fruit</MenuItem>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="apple">Apple</MenuItem>
          <MenuItem value="banana">Banana</MenuItem>
          <MenuItem value="coconut">Coconut</MenuItem>
          <MenuItem value="lemon">Lemon</MenuItem>
          <MenuItem value="cherry">Cherry</MenuItem>
          {/* Add options for fruit here */}       
        </Select>
        </FormControl>
        <FormControl variant='outlined' fullWidth  label="HerbsAndSpices" style={{ padding: '1rem' }}>
        <Select
          className={classes.select}
          value={herbsAndSpices}
          onChange={(event) => setHerbsAndSpices(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Herbs and Spices</MenuItem>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="vanilla">Vanilla</MenuItem>
          <MenuItem value="oregano">Oregano</MenuItem>
          <MenuItem value="basil">Basil</MenuItem>
          <MenuItem value="garlic">Garlic</MenuItem>
          {/* Add options for herbs and spices here */}
        </Select>
        </FormControl>
        <FormControl variant='outlined' fullWidth label="Fish" style={{ padding: '1rem' }}>
        <Select
          className={classes.select}
          value={fish}
          onChange={(event) => setFish(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Fish</MenuItem>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="herring">Herring</MenuItem>
          <MenuItem value="salmon">Salmon</MenuItem>
          <MenuItem value="trout">Trout</MenuItem>
          <MenuItem value="tuna">Tuna</MenuItem>
          {/* Add options for fish here */}
        </Select>
        </FormControl>
        <FormControl variant='outlined' fullWidth label="Seafood" style={{ padding: '1rem' }}>
        <Select
          className={classes.select}
          value={seafood}
          onChange={(event) => setSeafood(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Seafood</MenuItem>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="shrimp">Shrimp</MenuItem>
          <MenuItem value="crab">Crab</MenuItem>
          <MenuItem value="lobster">Lobster</MenuItem>
          {/* Add options for seafood here */}
        </Select>
        </FormControl>
        <FormControl variant='outlined' fullWidth label="Grains" style={{ padding: '1rem' }}>
        <Select
          className={classes.select}
          value={grains}
          onChange={(event) => setGrains(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Grains</MenuItem>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="wheat">Wheat</MenuItem>
          <MenuItem value="rice">Rice</MenuItem>
          {/* Add options for grains here */}
        </Select>
        </FormControl>
        <Card style={{ marginTop: '1rem', marginBottom: '1rem' ,backgroundColor: '#fefefe' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              
            </Typography>
            <Typography variant="body1" component="p">
              {meal}
            </Typography>
          </CardContent>
        </Card>
        <Button onClick={determineMeal} variant='outlined'>Determine Meal</Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
