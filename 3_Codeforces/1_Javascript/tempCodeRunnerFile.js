process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';

process.stdin.on('data', function (chunk) {
    inputData += chunk;
});

process.stdin.on('end', function () {
    const w = parseInt(inputData.trim());
    if (w > 2 && w % 2 === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
});