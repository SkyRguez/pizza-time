/* TODO: Create the PizzaIngredients Component consisting of:
  - An `ul` where you `map` over `ingredients` to create a `PizzaIngredient` per `ingredientKey`
*/
import React from "react";
import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    return (
      <ul>
        {Object.keys(this.props.ingredients).map(ingredientKey => (
          <PizzaIngredient
            ingredientsDetails={this.props.ingredients[ingredientKey]}
            ingredients={this.props.ingredients}
            addIngredient={this.props.addIngredient}
            ingredientKey={ingredientKey}
            key={ingredientKey}
          />
        ))}
      </ul>
    );
  }
}

export default PizzaIngredients;
