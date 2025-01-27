const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Barcode scanner ready. Scan a barcode...');

// Listen for input
rl.on('line', (input) => {
    console.log(`Scanned barcode: ${input}`);
});