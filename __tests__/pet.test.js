const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        const pet2 = new Pet('Eddy');

        expect(pet.name).toEqual('Fido');
        expect(pet2.name).toEqual('Eddy');
    });

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();
        expect(pet.age).toEqual(1);

        pet.growUp();
        expect(pet.age).toEqual(2);
    });

    it('increments hunger by 5 for every 1 age', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);

        pet.growUp();
        expect(pet.hunger).toEqual(5);
    })

    it('decreases fitness by 3 for every 1 age', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);

        pet.growUp();
        expect(pet.fitness).toEqual(7);

        pet.growUp();
        expect(pet.fitness).toEqual(4);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 31;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet ('fido');
        
        pet.fitness = 4;

        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet ('fido');

        pet.fitness = 8;

        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.hunger = 11;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {

    it('decreases hunger by 3', () => {
        const newPet = new Pet ('Lily');

        newPet.growUp();
        newPet.feed();

        expect(newPet.hunger).toEqual(2);
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet ('Eddy')
        pet.hunger = 2;

        pet.feed();
        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('returns i need a walk if fitness is 3 or less', () => {
        const pet = new Pet ('Alfie');

        pet.fitness = 2;

        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk')
    });

    it('returns i am hungry if hunger is 5 or more', () => {
        const pet = new Pet ('Chouchou');

        pet.hunger = 6;

        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry')
    });

    it('returns i am hungry and i need a walk if both above are true', () => {
        const pet = new Pet ('Eddy');

        pet.hunger = 6;
        pet.fitness = 2;

        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns i feel great if the none of the above is true', () => {
        const pet = new Pet ('Almond');

        pet.hunger = 2;
        pet.fitness = 4;

        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great!');
    });
});

describe('isAlive', () => {
    it('it returns false when fitness is 0 or less', () => {
        const pet = new Pet ('Fido');

        pet.fitness = -1;

        expect(pet.isAlive).toBe(false);
    });

    it('returns false when hunger is 10 or more', () => {
        const pet = new Pet ('Rex');

        pet.hunger = 11;

        pet.isAlive;
        expect(pet.isAlive).toBe(false);
    });

    it('returns false when age is 30 or more', () => {
        const pet = new Pet ('Spot');

        pet.age = 30;

        expect(pet.isAlive).toBe(false);
    })

    it('returns true if everything in healthy level', () => {
        const pet = new Pet ('Lily');

        expect(pet.isAlive).toBe(true);
    });
});

describe('haveBaby', () => {
    it('creates a baby of parent', () => {
        const pet = new Pet ('Eärendil');

        pet.haveBaby('Elrond');
        expect(pet.children).toEqual([{name: 'Elrond', age: 0, hunger: 0, fitness: 10, children:[]}]);

        pet.haveBaby('Elros');
        expect(pet.children).toEqual([{name: 'Elrond', age: 0, hunger: 0, fitness: 10, children:[]}, {name: 'Elros', age: 0, hunger: 0, fitness: 10, children:[]}]);
    })
});

describe('adoptChild', () => {
    it('passes child into parent with adoptChild', () => {
        const parent = new Pet ('Bilbo');
        const child = new Pet ('Frodo');

        parent.adoptChild(child);
        expect(parent.children[0]).toBe(child);
    });
});