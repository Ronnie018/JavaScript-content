const something = {
    um: "one",
    dois: "two",
}

//clonning//

//first method

const newObject = Object.assign({}, something);
console.log(newObject);

//second method

const newObject2 = {...something};

console.log(newObject2);