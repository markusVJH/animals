import React, { useState } from "react";
import Card from "./Card";
import animals from "./Animals";
import './App.css'
import Search from './Search';

function App() {
  const [animalList, setAnimalList] = useState(animals);
  const [searchTerm, setSearchTerm] = useState('');

  const likeHandler = (index) => {
    const updatedAnimalList = [...animalList];
    updatedAnimalList[index].likes += 1;
    setAnimalList(updatedAnimalList);
  };

  const dislikeHandler = (index) => {
    const updatedAnimalList = [...animalList];
    updatedAnimalList[index].likes -= 1;
    setAnimalList(updatedAnimalList);
  };

  const removeHandler = (index) => {
    const updatedAnimalList = [...animalList];
    updatedAnimalList.splice(index, 1);
    setAnimalList(updatedAnimalList);
  };

  const indexedAnimalList = animalList.map((animal, index) => ({
    ...animal,
    index,
  }));

  const filteredAnimalList = indexedAnimalList.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all">
        <h1>Animals</h1>
      <div className="header">
        <Search onSearch={setSearchTerm} />
      </div>
      <main className="animals">
        {filteredAnimalList.map((animal) => (
          <Card
            key={animal.index}
            name={animal.name}
            likes={animal.likes}
            onLike={() => likeHandler(animal.index)}
            onDislike={() => dislikeHandler(animal.index)}
            onRemove={() => removeHandler(animal.index)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;