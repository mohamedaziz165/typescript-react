import React, { Component } from 'react';

// 1. Définir une interface pour l'état
interface CounterState {
  count: number; // L'état contient une valeur numérique appelée `count`
}

// 2. Ajouter le type de props si nécessaire (vide ici)
interface CounterProps {}

// 3. Étendre la classe avec les types `CounterProps` et `CounterState`
class Counter extends Component<CounterProps, CounterState> {
  // 4. Définir l'état initial avec un type
  state: CounterState = {
    count: 0,
  };

  // 5. Définir les méthodes avec les bons types
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}