const fs = require('fs');

console.log("1. Start");

// Timer Phase
setTimeout(() => {
    console.log("2. setTimeout executed");
}, 0);

// Check Phase
setImmediate(() => {
    console.log("3. setImmediate executed");
});

// Poll Phase (I/O)
fs.readFile(__filename, () => {
    console.log("4. File read completed");

    setTimeout(() => console.log("5. setTimeout inside I/O"), 0);
    setImmediate(() => console.log("6. setImmediate inside I/O"));
});

console.log("7. End");
