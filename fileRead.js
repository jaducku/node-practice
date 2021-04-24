var fs = require('fs');
var array = fs.readFileSync('sample.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}
