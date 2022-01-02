// Function dalam function

function outher() {

    console.log("Outher");

    function inner() {
        console.log("Inner");
    }

    inner();
    inner();
}

outher();

// inner(); // error can not access inner function