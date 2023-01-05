import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, Button } from '@material-ui/core';
import ingredients from '../ingredients/ingredients';
import recipes from '../recipes/recipes';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: '0 auto',
    marginTop: theme.spacing(10),
    backgroundColor: '#c28dff',
  },
  select: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const RecipeCard = () => {
  const classes = useStyles();
  const [meal, setMeal] = React.useState('');
  const [mealFound, setMealFound] = React.useState(false);
  const [ingredient, setIngredient] = React.useState('');

  const determineMeal = () => {
    // Find all recipes that match the selected ingredient
    const matchingRecipes = recipes.filter((recipe) => {
      return recipe.ingredients.includes(ingredient);
    });
  
    if (matchingRecipes.length > 0) {
      setMeal(matchingRecipes.map((recipe) => recipe.name).join('\n'));
      setMealFound(true);
    } else {
      setMealFound(false);
    }
  };
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          What Ingredients Do You Have?
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          <FormControl>
            <Select variant='outlined' fullWidth
              className={classes.select}
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            >
              {ingredients.map((ingredient) => (
                <MenuItem key={ingredient} value={ingredient}>
                  {ingredient}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="outlined"
              color="#a75fbe"
              onClick={determineMeal}
            >
              Determine Meal
            </Button>
          </FormControl>
          <br />
          {mealFound ? (
  <div>
    {meal.split('\n').map((meal) => (
      <Typography variant="h6" component="h3" key={meal}>
        {meal}
      </Typography>
    ))}
  </div>
) : (
  <Typography variant="h6" component="h3">
    No meal found.
  </Typography>
)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;