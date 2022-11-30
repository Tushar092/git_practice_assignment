let string = "Tushar";
let bag= "";

for(let i = 0; i <= string.length - 1; i++){
	bag += string[i];
}

if(bag === string){
	console.log("Palindrome");
}else{
	console.log("Not Palindrome");
}