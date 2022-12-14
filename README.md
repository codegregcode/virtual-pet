# Virtual-Pet

by Greg Cain I'm creating this project as part of my studies with [Command Shift](https://github.com/CommandShiftHQ). By cloning this repo to your computer you will then be able to create a pet to look after in your REPL

## Installation & How to use

1. Clone repo down to your computer
2. In your REPL type

   ```javascript
   const Pet = require("path/to/pet.js");
   ```

   ![1672844868621](image/README/1672844868621.png)

3. Now you can create a pet!

   yourPet is a placeholder variable, it can be whatever you want to refer your pet as in the REPL. I've used myPet in this example, but you can use anything)

   ```javascript
   const yourPet = new Pet("putYourPetsNameHere");
   ```

   ![1672844907439](image/README/1672844907439.png)

4. You age your pet using growUp() (however it only lives to a maximum age of 30 😢)

   ```
   yourPet.growUp();
   ```

   ![1672844947565](image/README/1672844947565.png)

5. As your pet grows up you will see that not only does the pet's age change, but fitness and hunger, too! Your pet's fitness will decrease by 3, and hunger will increase by 5. If the fitness drops to 0 or hunger reaches 10 your pet will die, luckily you have tools (functions) that can help!
6. You can feed your pet with the feed function which will reduce hunger by 3

   ```
   yourPet.feed();
   ```

   ![1672845091778](image/README/1672845091778.png)

7. And you can give your pet excerise by taking it for a walk using the walk function, which will increase fitness by 3

   ```
   yourPet.walk();
   ```

   ![1672845107769](image/README/1672845107769.png)

8. You can check on how your pet is doing by using the check up function. Your pet will tell you if it needs a walk, is hungry, if it's hungry and needs or walk, or if everything is great!

   ```
   yourPet.checkUp();
   ```

   ![1672845188129](image/README/1672845188129.png)

9. Your pet can also have a baby! You will also need to look after the baby by using the above functions!

   ```
   yourPet.haveBaby();

   ```

   ![1672914963676](image/README/1672914963676.png)

10. To adopt a child, you must first create the child the same way you created your pet

    ```
    const yourChildPet = new Pet('putChildsNameHere')
    ```

    and then use the adoptChild function the parent pet!

    ```
    yourPet.adoptChild(yourChildPet)
    ```

    ![1672915325885](image/README/1672915325885.png)

## Roadmap

~~I should hopefully have this all finished by the end of week 4 of this module, which I think is Christmas Day 🙃~~

I have actually finished following the track for this project, but I still have some plans for it!

- ~~update to object class~~
- add gui

## Application Dependencies

JavaScript and Jest

## Support

Thank you to all the support from tutors and fellow coursemates at [Command Shift](https://github.com/CommandShiftHQ) 🙌

## Authors and acknowledgement

[codegregcode](https://www.linkedin.com/in/greg-cain/)
