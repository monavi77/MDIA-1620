//lesson 3
let horseName = "HelloWorld";
console.log(horseName);
horseName = "noone";
console.log(horseName);
let horseAge = "1";
console.log(horseAge);
let isHorseInside = false;
console.log(isHorseInside);
//lesson 4
console.log(typeof "6554");
console.log(typeof true);
const STABLE_MONTHLY_FEE = 100; //uppercase is preferable 
console.log(STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE * 3);
console.log(STABLE_MONTHLY_FEE - STABLE_MONTHLY_FEE);
console.log("hi" + "buy" + "    me" + "burger");
console.log("hi" + 2); //type coercion
console.log("2" + 2); //type coercion
console.log("2" - 2); //type coercion
console.log(true - 2);
console.log("hi" + false);
console.log(`my horse does not like his name, ${horseName} because he is too young, only${horseAge} years old`);//concatenation
// Lab4
// new pull request after pushing 
horseName = "Natasha";
let horseNickname = "Nataly";
console.log(`My Horse has a name ${horseName} but everyone call her ${horseNickname}`);
console.log("Only Nataly's fans can save $" + ((STABLE_MONTHLY_FEE * 3) * 0.1) + ", from 3 months $" + (STABLE_MONTHLY_FEE * 3) + " subscription.");
// lab-5
if (!isHorseInside) {
    console.log(horseName + ' is outside');
}
else {
    console.log(horseName + ' is inside');
}

//lesson 6
//
let horseNames = [horseName, "Strawberry", "Beans"];
let horseAges = [horseAge, 2, 10];
let horseLocations = [isHorseInside, false, true];
let crazyArray = ["hello", [2, 3, 4]]
console.log(horseNames);
console.log(horseNames.length);
//horseNames.push("Lettuce");
console.log(`WELCOME TO MY STABLES! There are ${horseNames.length} horses staying here! Their names are: ${horseNames[1]}, ${horseNames[2]}`);
console.log("WELCOME TO MY STABLES! There are " + horseNames.length + "  horses staying here! Their names are " + horseNames[0] + "," + horseNames[2] + horseNames[1] + "!");
if (horseNames[0] === "Natasha") {
    console.log("Hi Natasha!")
}
if (horseNames.length > 2) {
    console.log("Bye Natasha!")
}


//lab 6
console.log("All horses like to check the code, that is why " + horseNames[0] + " invites " + horseNames[1] + " and " + horseNames[2] + " to the stables, so there are " + horseNames.length + " horses now!");
if (horseNames[2] === "Beans") {
    console.log(horseNames[2] + " is inside")
}
if (horseAges[1] === 1) {
    console.log(horseNames[1] + " also inside")
}
else {
    console.log(horseNames[0] + " also inside")
}
if (horseLocations[1] === isHorseInside) {
    console.log(horseNames[1] + " is outside")
}
