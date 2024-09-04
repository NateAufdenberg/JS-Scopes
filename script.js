console.group("Exercise 1")

function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction(){
        let innerVar = "I'm outside";
        console.log(outerVar);
        console.log(innerVar);
        
    }
    innerFunction();
}

outerFunction();
console.log("So what we see is that outerVar is acting in a local Scope while innerVar is acting as a  function scope. This is because of the place of the variables in the code. With outerVar being within the outerFunction while innerVar is within the innerFunction.");

console.group("Exercise 2");

function mainFunction() {
    // Call the hoistedFunction here
    // Now, declare the hoistedFunction below
}

mainFunction();

console.log("Nothing happens when the function is called because there is nothing in the function to be called.");

console.group("Exercise 3");

function firstFunction() {

    function secondFunction(){
        let secondVar = "I'm cooler";
        console.log(secondVar);
    }
    secondFunction();
};
firstFunction();

console.group("Exercise 4");

let puppy = "Puppies are cute";

function modifyGlobal() {
    puppy = "Puppy had an accident";
    console.log(puppy);
}

function localScopeTest() {
    let puppy = 23;
    console.log(puppy);
}
modifyGlobal();
localScopeTest();


console.log("The modifyGlobal function console logs the modified version of the variable. While the localScopeTest uses an entirely new variable with the same as the Global variable and logs it to the console.");

console.group("Exercise 5");

let param = 23;

function functionFactory(param) {
    if (param => 1) {
        console.log("true");
    }
}

functionFactory();

console.group("Exercise 6")
/*
function hoistingTest() {
    console.log(kitten);
}

hoistingTest();

let kitten = "kittens are evil";
*/
console.group("Exercise 6 explanation");
console.log("The reason that the function isn't working is because of the fact that the data needed for the function isn't there until after the function has ran and then the data is declared.");

console.group("Exercise 7");

function setupCounter() {
    let count = 0;
            return {
        increment: function() {
            count++;
            return count;
        }
    };
}

let counter = setupCounter();

console.log(counter.increment());

console.group("Exercise 8");

function createCounter() {
    let counter = 0;

    return function() {
        counter += 1;
        if (counter > 10) {
            counter = 1;
        }
        console.log(counter);
        return counter;
    }
}

let counterFunction = createCounter();
for (let i = 0; i < 15; i++) {
    counterFunction();
}
console.log("The closures allow the inner function to more or less 'remember' the current state of an variable, which insures the increments correctly.");

console.group("Exercise 9");

let global = 12;

function modify() {
    global = 5
    
    return function() {
        global += 5;

        console.log(global);
    };
};

function modified() {
    try {
        local += 5;
    } catch (e) {
        console.log("Error: " + e.message)
    }

    let local = 0;
    console.log(local);
}

modify()
modified()

console.log("It's preserved in the sense that other outer functions won't be able to modify and interfere with the data.")