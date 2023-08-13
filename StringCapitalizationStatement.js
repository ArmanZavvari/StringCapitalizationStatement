function capitalizedFirstLetter(string) {
    const loweredString = string.toLowerCase();
    const newString = loweredString[0].toUpperCase() + loweredString.slice(1);
    return newString;
}

function capitalizeStatement(string) {
    const names = string.split(" ");
    const newName = [];
    for (const n of names) {
        newName.push(capitalizedFirstLetter(n));
    }
    return newName.join(" ");
}

const msg = "tHis iS a StaTmenT";
console.log(capitalizeStatement(msg));
