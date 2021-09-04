// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
let cnt=0;

rl.on("line", function(line) {
  input.push(line);

	cnt++;
	if(cnt===3){
		const data_arry = input[1].split(' ');
		const target = input[2];
		
		console.log(binary_search(data_arry,target));
		rl.close();
	}
}).on("close", function() {
	process.exit();
});


function binary_search(data_arry, target){
	let low=0;
	let high = data_arry.length-1;
	while(low <= high){
		let mid = Math.floor((high+low)/2);
		let searched_val = data_arry[mid];
				
		if(searched_val===target){
			return mid+1;
		}else if(searched_val > target){
			high = mid -1;
		}else{
			low = mid +1;
		}
	}
	return 'X';
}
