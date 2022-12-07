//document.getElementById("count").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
//  let count = firstBatchn + secondBatch
// console.log(count);

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

let myAge = 23
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge);

let count = 5

// count + 1
 count = count + 1 // 5 + 1 = 6

 count = count + 10
console.log(count);

// Create a variable, bonusPounts. Initialize it as 50. Increase it to a 100
// Decrease it down to 25, and then finally increase it to 70
// console.log the value after each step

let bonusPoints = 50

console.log(bonusPoints);

bonusPoints = bonusPoints + 50
console.log(bonusPoints);

bonusPoints = bonusPoints - 75
console.log(bonusPoints);

bonusPoints = bonusPoints + 45
console.log(bonusPoints);

// initialize the count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    console.log("The button was clicked");
}

// Setting up the race

function countDown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the race

countDown()

// GO!
// Players are running the race
// Race is finished!

// Get ready for a new race

countDown()

//Create a function(you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function number() {
    console.log(42);
}

number()

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function lapTime() {
    let totalTime = lap1 + lap2 + lap3 // You could have skipped the variable stage
    console.log(totalTime) // And simply console.log(lap1 + lap2 + lap3)

}

lapTime()

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLaps() {
     lapsCompleted = lapsCompleted + 1
}

incrementLaps()
incrementLaps()
incrementLaps()

console.log(lapsCompleted)

// let count = 5
//count = count + 1
//console.log(count)

// document.getElementById("count-el")
//initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") // pass in argument

console.log(countEl);


let counting = 0

function increment() {
    console.log("clicked")
    countEl.innerText = count
    counting = counting + 1

}

// 1. Create a function save(), which logs out the count when it's called

function save() {
    console.log("count")
}

save()

// Using Strings

let userName = "per"

// Create a variable, message, that stores the string: "You have a tree new notification"

let message = "You have a tree new notification"

console.log(message + ", " + userName + "!")

// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = message + "," + " " + userName + "!"

console.log(messageToUser)


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

let firstName = "Babes"

let greeting = "Hi, my name is "

console.log(greeting + firstName)


//Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let myGreeting = greeting + firstName + "."

console.log(myGreeting)

let points = 4
let bonusPoint = "10"

let totalPoints = points + bonusPoint

console.log(totalPoints)

// Exercise, NB Strings ALWAYS wins!
console.log(4 + 5) // answer is 9
console.log("2" + "4") // answeris "24"
console.log("5" + 1) // answer is "51"
console.log(100 + "100") // answer is "100100"





