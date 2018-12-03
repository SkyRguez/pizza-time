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
            ingredients={this.props.ingredients}
            ingredientsDetails={this.props.ingredients[ingredientKey]}
            ingredient={this.props.ingredient}
            addIngredient={this.props.add}
            ingredientKey={ingredientKey}
            key={ingredientKey}
          />
        ))}
      </ul>
    );
  }
}

export default PizzaIngredients;
