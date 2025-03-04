function greeting(name) {
    console.log(`Welcome ${name}`);
}

function showName(callback) {
    let name = 'Arefin Shaon' ;
    callback(name);
}

showName(greeting);