const ADD_HUNGER = 5;
const TAKE_FITNESS = 3;
const MAXIMUM_FITNESS = 10;
const ADD_FITNESS = 4;
const MIN_HUNGER = 0;
const TAKE_HUNGER = 3;
const FIT_LEVEL = 3;
const HUNGER_LEVEL = 5;
class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.children = [];
    }
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
    growUp() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }
        this.age += 1;
        this.hunger += ADD_HUNGER;
        this.fitness -= TAKE_FITNESS;
    }
    walk() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }
        this.fitness = Math.min(this.fitness + ADD_FITNESS, MAXIMUM_FITNESS)
    }
    feed() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }
        this.hunger = Math.max(this.hunger - TAKE_HUNGER, MIN_HUNGER);
        }
    checkUp() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }
        if (this.fitness <= FIT_LEVEL && this.hunger >= HUNGER_LEVEL) {
            return `I am hungry AND I need a walk`;
        } else if (this.hunger >= HUNGER_LEVEL) {
            return `I am hungry`;
        } else if (this.fitness <= FIT_LEVEL) {
            return `I need a walk`;
        } else {
            return `I feel great!`;
        }
    }
    haveBaby(bName) {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }
        const baby = new Pet(bName);
        this.children.push(baby);
    }
    adoptChild(child) {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }
        this.children.push(child);
    }
};
module.exports = Pet;
