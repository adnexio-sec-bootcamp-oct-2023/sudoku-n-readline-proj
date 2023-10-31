//prompt in browser
//process.stdin in readline module

/*
    Key points for readline module:
    1. Built into Node.js so we no need external installation
    2. Allows for reading data line-by-line from a stream
    3. Commonly used tool to get input in CLI as tool

    Steps:
    1. Understand the obj of this built-in module
    2. Set up the module
    3. Structure the date using variables
    4. Gather the user input
    5. Store & nesting inputs
    6. Display the collecting data
    7. Test our application 
*/

//Step 1: Discuss the obj (name, age, location)

//Step 2: Setting up
const readline = require("readline");

const readLine = readline.createInterface({
    input: process.stdin, //to grab the input from the terminal
    output: process.stdout,
});

//Step 3: Structure our Data

let profile = {
    //name: "whatever you type in the terminal", 
    //age: "whatever you type in the terminal",
    //location "whatever you type in the terminal"
};

//Step 4: Gathering the User's input
readLine.question("What is your name?", (name) => {
    profile.name = name;

    readLine.question("How old are you?", (age) => {
        profile.age = age;

        readLine.question("Where are you from?", (location) => {
            profile.location = location;

            displayProfile();
            readLine.close(); //concludes the whole program
         });
     });
 });

 /*
     The purpose of this function is to display the user's information
 */
function displayProfile() {
console.log("Hello " + profile.name); //it will call the object property for name
console.log("You are " + profile.age + " years old."); //it will call the object property for age
console.log("You are from " + profile.location); //it will call the object property for location
}
