function isValidPin(pin) {
    return /^[0-9][0-9]*$/.test(pin); 
}
function testCases(pin){
if (isValidPin(pin)) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}
}

let pin = "A400088";
testCases(pin);
let pin2 = "400088";
testCases(pin2);


