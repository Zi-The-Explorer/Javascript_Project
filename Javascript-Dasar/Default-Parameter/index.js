// Kode Default Parameter
function register(name, gender = "UNKNOWN") {
    console.log(`Nama : ${name} and Gender ${gender}`);
}

register("Ozi", "MALE");
register("Dinda", "FAMALE"); 
register("Cocoh");
register("Coy", undefined);