import React from 'react';

// 1. Définir une interface pour les props
interface GreetingProps {
  name: string; // La propriété `name` est une chaîne de caractères
}

// 2. Ajouter le type aux props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; 
};

export default Greeting;

