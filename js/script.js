var km = parseInt(prompt("How many kilometers will you travel? (Only numbers accepted)"));
var age = parseInt(prompt("How old are you?"));
var cost = (km * 0.21);
var discount20 = cost - (cost / 5);
var discount40 = cost - ((cost / 5) * 2);

if (age < 18) {
    var finalCost = Math.round(discount40 * 100 + Number.EPSILON) / 100;
} else if (age >= 65) {
    var finalCost = Math.round(discount40 * 100 + Number.EPSILON) / 100;
} else {
    var finalCost = Math.round(cost * 100 + Number.EPSILON) / 100;
}

document.getElementById("price").innerHTML = finalCost;
document.getElementById("years").innerHTML = age;
document.getElementById("kms").innerHTML = km;