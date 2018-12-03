/* TODO: Create the PizzaIngredient Component consisting of:
  - An `li` with
    class `{this.props.ingredient.selected ? "marked" : ""}`
    onClick that switch the value of the current ingredient `selected` property
    (HINT: 👆 Remember, to change state you need to declare a function where state lives)
    - A `span` with class `phrase`
      Show the value of the current ingredient `name` property
    - A `span` with class `points`
      Show the value of the current ingredient `cash` property.
      (HINT: 👆 Check out `src/helpers.js` to import the `formatPrice` function)
*/
import React from "react";
import { formatPrice } from "../helpers";

class PizzaIngredient extends React.Component {
  handleClick = _event => {
    this.props.addIngredient(this.props.ingredientKey);
  };

  render() {
    const { name, cash } = this.props.ingredientsDetails;
    return (
      <li
        className={this.props.ingredients.selected ? "marked" : ""}
        onClick={this.handleClick}
      >
        <h3>
          <span className="phrase">{name}</span>
        </h3>
        <h3>
          {this.props.ingredients.cash}
          <span className="points">{formatPrice(cash)}</span>
        </h3>
      </li>
    );
  }
}

export default PizzaIngredient;
