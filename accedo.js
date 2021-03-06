const firstRecurringChar = str => {
	// write your code here
	for(let i = 0; i < str.length; i++){
		let letter = str[i];
		for(let j = (i + 1); j < str.length; j++){
			if(letter == str[j])
				return letter;
		}
	}

	return "";
};

console.log(firstRecurringChar("abcdec") === "c" ? "Passed!" : "Failed!");
console.log(firstRecurringChar("abba") === "b" ? "Passed!" : "Failed!");
console.log(firstRecurringChar("aopjhlspp") === "p" ? "Passed!" : "Failed!");
console.log(firstRecurringChar("aabcdefg") === "a" ? "Passed!" : "Failed!");
console.log(firstRecurringChar("abcab") === "a" ? "Passed!" : "Failed!");
console.log(firstRecurringChar("abcde") === "" ? "Passed!" : "Failed!");
