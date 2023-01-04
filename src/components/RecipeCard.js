import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';

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
  const [vegetables, setVegetables] = React.useState('');
  const [fruit, setFruit] = React.useState('');
  const [herbsAndSpices, setHerbsAndSpices] = React.useState('');
  const [fish, setFish] = React.useState('');
  const [seafood, setSeafood] = React.useState('');
  const [grains, setGrains] = React.useState('');

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
          <MenuItem value="broccoli">Broccoli</MenuItem>
          <MenuItem value="carrots">Carrots</MenuItem>
          <MenuItem value="spinach">Spinach</MenuItem>
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
          {/* Add options for seafood
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
          {/* Add options for grains here */}
        </Select>
        </FormControl>
      </CardContent>
    </Card>  
  );
};

export default RecipeCard;
