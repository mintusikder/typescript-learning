class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound(): void {
    console.log(`${this.name} the ${this.species} says: ${this.sound}`);
  }
}

const dog = new Animal("Dog Vai", "dog", "woof woof");
const cat = new Animal("Cat Vai", "cat", "mew mew");

cat.makeSound();
dog.makeSound();

console.log(dog.name);
console.log(dog.species);
