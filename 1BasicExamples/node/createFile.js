const fs = require('fs');
const path = require('path');

function createHelloFile() {
    const filePath = path.join(__dirname, 'hello.txt');
    fs.writeFileSync(filePath, 'Hello world', 'utf8');
}

// Example usage:
createHelloFile();