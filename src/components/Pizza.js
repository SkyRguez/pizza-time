/*TODO: Create the Pizza Component consisting of:
  - A `div` with a class `content`
    - A `PizzaHeader` component
    - A `PizzaIngredients` component
    - A `PizzaTotal` component
  - You need 👇 code to set the initial state*/
import React from "react";
import PizzaHeader from "./PizzaHeader";
import PizzaIngredients from "./PizzaIngredients";
import PizzaTotal from "./PizzaTotal";

class Pizza extends React.Component {
  state = {
    ingredients: {
      dough: {
        id: 1,
        name: "Dough",
        cash: 500,
        selected: true
      },
      pinneaple: {
        id: 2,
        name: "Pinneaple",
        cash: 150,
        selected: false
      },
      mozzarella: {
        id: 3,
        name: "Mozzarella",
        cash: 200,
        selected: false
      },
      pepperoni: {
        id: 4,
        name: "Pepperoni",
        cash: 125,
        selected: false
      },
      ham: {
        id: 5,
        name: "Ham",
        cash: 150,
        selected: false
      },
      tuna: {
        id: 6,
        name: "Tuna",
        cash: 100,
        selected: false
      }
    }
  };

  addIngredient = ingredientKey => {
    const newIngredient = { ...this.state.ingredients };
    newIngredient[ingredientKey] = newIngredient[ingredientKey]
      ? newIngredient[ingredientKey] + 1
      : 1;
    this.setState({ ingredients: newIngredient });
  };

  render() {
    return (
      <div className="content">
        <PizzaHeader />
        <PizzaIngredients
          ingredients={this.state.ingredients}
          ingredient={this.ingredients}
          addIngredient={this.addIngredient}
        />
        <PizzaTotal />
      </div>
    );
  }
}

export default Pizza;
