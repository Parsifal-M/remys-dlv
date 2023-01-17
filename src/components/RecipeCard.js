import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl } from "@material-ui/core";
import ingredients from "../ingredients/ingredients";
import recipes from "../recipes/recipes";

const useStyles = makeStyles((theme) => ({
  ingredientscard: {
    maxWidth: 500,
    margin: "0 auto",
    marginTop: theme.spacing(10),
    backgroundColor: "#c28dff",
  },
  select: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  recipecard: {
    width: 500,
    margin: "0 auto",
    marginTop: theme.spacing(5),
    backgroundColor: "#c28dff",
  },
}));

const RecipeCard = () => {
  const classes = useStyles();
  const [meal, setMeal] = React.useState("");
  const [quantities, setQuantities] = React.useState("");
  const [mealFound, setMealFound] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState('');

  const determineMeal = (event) => {
    // Find all recipes that match the selected ingredient
    const matchingRecipes = recipes.filter((recipe) => {
      return recipe.ingredients.includes(event.target.value);
    });

    setSelectedIngredient(event.target.value);

    if (matchingRecipes.length > 0) {
      setMeal(matchingRecipes.map((recipe) => recipe.name).join("\n"));
      setQuantities(matchingRecipes.map((recipe) => recipe.quantities).join("\n"));
      setMealFound(true);
    } else {
      setMealFound(false);
    }
  };

  return (
    <>
      <Card className={classes.ingredientscard}>
        <CardContent>
          <Typography variant="h5" component="h2">
            What Ingredients Do You Have?
          </Typography>
          <Typography variant="body2" component="p">
            <br />
            <FormControl>
              <Select
                fullWidth
                variant="outlined"
                className={classes.select}
                value={selectedIngredient || 'Ingredient'}
                onChange={determineMeal}
              >
                {ingredients.map((selectedIngredient) => (
                  <MenuItem key={selectedIngredient} value={selectedIngredient}>
                    {selectedIngredient}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
          </Typography>
        </CardContent>
      </Card>
      <FormControl fullWidth>
        <Card className={classes.recipecard}>
          <CardContent>
            {mealFound ? (
              <div>
                {meal.split("\n").map((meal) => (
                  <Typography variant="h6" component="h3" key={meal}>
                    {meal}
                  </Typography>
                ))}
                {quantities.split("\n").map((quantities) => (
                  <Typography variant="body2" component="p" key={quantities}>
                    {quantities}
                  </Typography>
                ))}
              </div>
            ) : (
              <Typography variant="h6" component="h3">
                No meal found.
              </Typography>
            )}
          </CardContent>
        </Card>
      </FormControl>
    </>
  );
};

export default RecipeCard;
