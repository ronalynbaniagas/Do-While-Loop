// DO WHILE LOOP
const readline = require('readline');

const correctPassword = "ronabelss09";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForPassword() {
    rl.question('Please enter your password: ', (userPassword) => {
        if (userPassword === correctPassword) {
            console.log('Success! You have entered the correct password.');
            rl.close(); 
        } else {
            console.log('Incorrect password, please try again.');
            askForPassword();
        }
    });
}

askForPassword();


