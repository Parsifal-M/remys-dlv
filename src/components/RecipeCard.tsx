import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { ingredients } from "../recipes/ingredients";
import { Recipe, recipes } from "../recipes/recipes";

interface Props {}

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

export const RecipeCard: React.FC<Props> = () => {
  const classes = useStyles();
  const [meal, setMeal] = useState("");
  const [quantities, setQuantities] = useState("");
  const [mealFound, setMealFound] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const determineMeal = (event: React.ChangeEvent<{ value: unknown }>) => {
    // Find all recipes that match the selected ingredient
    const matchingRecipes = recipes.filter((recipe: Recipe) => {
      return recipe.ingredients.includes(event.target.value as string);
    });

    setSelectedIngredient(event.target.value as string);

    if (matchingRecipes.length > 0) {
      setMeal(matchingRecipes.map((recipe: Recipe) => recipe.name).join("\n"));
      setQuantities(matchingRecipes.map((recipe: Recipe) => recipe.quantities).join("\n"));
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
                value={selectedIngredient || "Ingredient"}
                onChange={determineMeal}
              >
                {ingredients.map((selectedIngredient: string) => (
                  <MenuItem key={selectedIngredient} value={selectedIngredient}>
                    {selectedIngredient}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
        </CardContent>
      </Card>
      {mealFound && (
        <Card className={classes.recipecard}>
          <CardContent>
            <Typography variant="h5" component="h2">
              You Can Make:
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              {meal}
              <br />
              <br />
              {quantities}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
