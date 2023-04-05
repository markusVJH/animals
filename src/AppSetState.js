import React, { Component } from 'react';
import { animals } from "./animalsList";


class App extends Component {
  state = {
    animals: animals
  }

  render() {
    return (
      <div>
        {this.state.animals.map(animal => <li>{animal.name}, likes: {animal.likes}</li>)}
      </div>
    );
  }
}