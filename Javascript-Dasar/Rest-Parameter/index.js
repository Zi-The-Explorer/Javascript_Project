// Kode rest parameter

function sum(name, ...data) {
    let total = 0;
    for(const item of data) {
        total += item;
    }
    console.log(`Total ${name} is ${total}`);
}


sum('Orange', 2,3,4,5,6,7,8);
sum('Apple', 2,3,4,5,6,7,8);
sum('Banana', 2,3,4,5,6,7,8);

const values = [10, 10, 10, 10, 10];
sum("Manggo", ...values);


// Kode Arguments Object 
function oldSum() {
    let total = 0;
    for(const item of arguments) {
        total += item;
    };
    console.log(`Total is ${total}`);
};

oldSum(1,2,3,4,5,6,7,8,9,10);