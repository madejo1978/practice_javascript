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
        const plantNeedsWater = (day) => {
            if (day === 'Wednesday') {
              return true;
            } else {
              return false;
            }
          };

        // you can write it even shorter by using concise arrow notation 
           // single line block: removing the parenthesis and return    
           // multi-line block 
        




        
