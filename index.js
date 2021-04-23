var ages = [3, 9, 23, 64, 2, 8, 28, 93]; 

var last_index = ages.length - 1;
var last_value = ages[last_index]; 
console.log(last_value);

var first = ages[0];




var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
for(const element of names) { 
    console.log(element);
}
// Figured out how to list the names in the console by searching up syntax on Google.
// This is what I found, and I used it, with the array name that I have made, added into the syntax.

var text = "";
for(i = 0; i < names.length; i++) {
    text += names[i] + " ";
}
console.log(text);

//Defined text with a simple quotation so that it had some kind of value, that way when it's printed to the console, it doesn't come up undefined.

var nameLengths = [];
for(const name of names) {
    nameLengths.push(3, 5, 3, 5, 4, 3);
    console.log(nameLengths);
}

//Used a for...of loop to iterate over and access each name in the names array. Pushed the numbers of the letters in each name to the nameLengths array.

var average = 0;
for(var i = 0; i < nameLengths.length; i++) {
    average += nameLengths[i];
}
var all = average / nameLengths.length;
console.log(average);

//Discovered a good way to set up code to find the average of an array on Google. I kind of did some guess work on it, though.

function repeat(word, n) {
    var string = "";
    while(n > 0) {
        repeat += word;
        n--;
    }

}


function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Cedric", "Jameson");

//I was able to figure out how to use parameters and arguments with this function from watching the videos in the course.

var theNumbers = [5, 10 ,15, 20, 25, 30, 35];




