function greetPerson(name){
    if (name === "Chandler"){
        var greet = "Hello Chandler";
        let greet1 = "Hello monica"
        console.log(greet1);
    }
    else{
        greet = "Hi there"
    }
    console.log(greet);
    var greet;
    // console.log(greet1);

}

greetPerson("Chandler");
greetPerson("Ross");

// let - block scoped  - scope only inside  {} let can not be redeclared
// var - function scoped  - can declare and access any where will be considered as declared at the top during interpretation
// var - is hoisted - can be redeclared