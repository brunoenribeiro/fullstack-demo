db = db.getSiblingDB('adoption');

db.pets.insertMany([
  { name: 'Luna', type: 'dog', breed: "Havanese", age: 5 },
  { name: 'Shoyu', type: 'dog', breed: "Fiapinho", age: 2 },
  { name: 'Misso', type: 'dog', breed: "Caramelo", age: 2 },
  { name: 'Lana', type: 'dog', breed: "Labrador", age: 8 },
]);