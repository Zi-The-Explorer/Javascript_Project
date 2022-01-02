// Kode function return value

function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
};

// Memanggil function dan menagkap return value nya
const result = sayHello("Akhmad", "Fauzi");
console.log(result);

// Function return value lebih dari satu
function getFinalScore(value) {
    if (value > 90) {
        return "A"
    } else if (value > 80) {
        return "B"
    } else if (value > 70) {
        return "C"
    } else if (value > 60) {
        return "D"
    } else {
        return "E"
    }
};

const resultScore = getFinalScore(100);
console.log(resultScore);

// Menghentikan eksekusi dengan function 
function isContaints(array, searchValue) {
    for(const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

console.log(isContaints([1,2,3,4,5,6,7,8,9,10], 7));