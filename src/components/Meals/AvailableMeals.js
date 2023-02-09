import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Gorniak's",
    description: "Cheeseburger tradicional",
    price: 15.0,
  },
  {
    id: "m2",
    name: "Gorniak's bacon",
    description: "Cheesebuger com bacon",
    price: 18.0,
  },
  {
    id: "m3",
    name: "Gorniak's double",
    description: "Duplo Cheeseburger tradicional",
    price: 22.0,
  },
  {
    id: "m4",
    name: "Gorniak's double bacon",
    description: "Duplo Cheesebuger e duplo bacon",
    price: 25.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
