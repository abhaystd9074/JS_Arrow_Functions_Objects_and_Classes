function isValidPin(pin) {
    return /^[1-9][0-9]{5}$/.test(pin);
}
function testCases(pin){
if (isValidPin(pin)) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}
}

let pin2 = "400088";
testCases(pin2);


