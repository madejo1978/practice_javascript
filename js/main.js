/* ************
*** VARIABLES
 **************/

console.log("is JS goed gekoppeld in HTML?")
let entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';
console.log(entree);

/* var favoriteAnimal = 'Brutus';
console.log(favoriteAnimal);
 */
let favoriteAnimal = 'Brutus';
console.log(favoriteAnimal);
console.log("My favorite animal: " + favoriteAnimal);

// template literals.
const myName = "Martinus";
console.log(myName);
const myCity = "Tilburg";
console.log(myCity);
console.log(`My name is ${myName}` + "." + ` My favorite city is ${myCity}` + ".");

// typeof
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(newVariable);
console.log(typeof newVariable);


/* ************
*** FUNCTIONS
 **************/

// functions
    // We use parameters as placeholders for information that will be passed to the function when it is called.
        // inside the function body, parameters act just like regular variables.
    // The values that are passed to the function when it is called are called arguments. 

function getReminder(){console.log('Water the plants.')};
getReminder();

function greetInSpanish(){console.log('Buenas Tardes.')};
greetInSpanish();

    // declare function with parameters 
    function sayThanks(name){
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.')};
    sayThanks('Martinus');

    // function with a default value
    function makeShoppingList(item1='milk', item2=69, item3=144){
        console.log(`Remember to buy ${item1}`);
        console.log(`Remember to buy ${item2}`);
        console.log(`Remember to buy ${item3}`);
      }
    makeShoppingList();

    // return
        // The return keyword is powerful because it allows functions to produce an output.
        
        // without return the calling of the function shows 'default'
        function rectangleArea(width, height) {
        let area = width * height 
        }
        console.log(rectangleArea(5, 7))
        
        // with return
        function monitorCount(rows, columns){return rows * columns};
        const numOfMonitors = monitorCount(5,4);
        console.log(numOfMonitors);

    // helper-functions
        // functions being called within another function
        function newFunction(firstParameter, secondParameter) {
            return helperFunction(firstParameter, secondParameter) * 1000;
          };
        //
        function monitorCount(rows, columns) {
        return rows * columns;
        }
        function costOfMonitors(rows, columns){return monitorCount(rows,columns) * 200};
        const totalCost = costOfMonitors(5,4);
        console.log(totalCost);

    // function expressions
        const plantNeedsWater = function(day){
            if(day === 'Wednesday'){
            return true;
            } else {
            return false;
            }
        };
        console.log(plantNeedsWater('Tuesday'));
     
    // arrow functions =>
        // a shorter way to write functions by using the special "fat arrow" () => notation.
        const plantNeedsWaterv2 = (day) => {
            if (day === 'Wednesday') {
              return true;
            } else {
              return false;
            }
          };

        // you can write it even shorter by using concise arrow notation 
           // single line block: removing the parenthesis and return    
           // multi-line block 
        
 /***************
 *** CONDITIONAL STATEMENTS
 **************/
      
    // if .. else statement
    let sale = true;

    sale = true;
    
    if(sale) {
      console.log('Time to buy!');
    } else {
      console.log('Time to wait for a sale.');
    };   

    // Comparison Operators
      // > < <= .+ === !==
    let hungerLevel = 7;
    
    hungerLevel = 8;

    if(hungerLevel > 7){console.log ('Time to eat!')
    } else {console.log ('We can eat later!'); 
    }

    // Logical Operators (booleans)
      // && ! ||

      let mood = 'sleepy';
      let tirednessLevel = 9;

      if(mood === 'sleepy' && tirednessLevel > 8){         
      console.log('bedtime!')
      } else{console.log('not bedtime yet!')
      }
    
    // Truthy and Falsy
      // to check if a variable exists, if the variable has a value: thruthy, empty: falsy
      // 0, "" or '', null, undefined, NaN or Not a Number
      let favoritePhrase = '';

      if (favoritePhrase) {
        console.log("This string doesn't seem to be empty.");
      } else {
        console.log('This string is definitely empty.');
      }

    // Truthy and Falsy Assignment
      // practical for checking username for personolized greeting, the so called 'short-circuit evaluation'
 
      let userName = '';
      let user = userName || 'Guest' // || operator is used to short-cut evaluate

      console.log(`Welcome ${user} `);

    //  Ternary Operator
      // shorter writing of an if ... else statements
      let isNightTime = true;

      if (isNightTime) {
        console.log('Turn on the lights!');
      } else {
        console.log('Turn off the lights!');
      }
      // to:
      isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

    // Else If Statements
      // The else if statement always comes after the if statement,  
      // and before the else statement. The else if statement also takes a condition.
    let season = 'summer';

    if (season === 'spring') {
      console.log('It\'s spring! The trees are budding!');
    } else if (season === 'fall') {
      console.log('It\'s fall! Leaves are falling!')
    } else if (season === 'winter') {
      console.log('It\'s winter! Everything is covered in snow.')
    } else if(season === 'summer'){
      console.log('It\'s sunny and warm because it\'s summer!')
    } else {
      console.log('Invalid season.');
    }
 
    // The switch keyword
      // alternative for Else IF, easer to read and write, but practical when you have to check lots of values
    let athleteFinalPosition = '';
    
    switch (athleteFinalPosition){
      case 'first place':
      console.log('You get the gold medal!');
      break; 
      case 'second place':
      console.log('You get the silver medal!');
      break; 
      case 'third place':
      console.log('You get the bronze medal!');
      break;
      default:
      console.log('You are a loser');
      break; 
    }  