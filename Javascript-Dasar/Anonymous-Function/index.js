// Anonymous function didalam variable 
let say = function (name) {
    console.log(`Hello ${name}`);
};

say("Ozi");



// Anonymous function di Parameter
function giveMeName(callback) {
    callback("Ozi");
}

giveMeName(function (name) {
    console.log(`Hello ${name}`);
});