var km = parseInt(prompt("How many kilometers will you travel? (Only numbers accepted)"));
var age = parseInt(prompt("How old are you?"));
var cost = (km * 0.21);
var discount20 = cost - (cost / 5);
var discount40 = cost - ((cost / 5) * 2);

if (age < 18) {
    var finalCost = discount20;
} else if (age >= 65) {
    var finalCost = discount40;
} else {
    var finalCost = cost;
}