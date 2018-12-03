/* TODO: Create the PizzaTotal Component consisting of:
  - A `div` with a class `score`
    - An `span` with class `label`
      Show the text `Total`
    - An `span` with class `value`
      Show the formated Price of the sum of all `selected` ingredients.

      😱😱😱😱😱😱😱😱😱😱😱😱  DON'T PANIC, YET!

      Over ` Object.keys(ingredients)`:
        1. filter `selected` ingredients
        2. map `cash` property
        3. reduce all that money with `reduce(<reducer function>, 0)`
*/
import React from "react";

class PizzaTotal extends React.Component {
  render() {
    return (
      <div className="score">
        <h1>Total</h1>
      </div>
    );
  }
}

export default PizzaTotal;
