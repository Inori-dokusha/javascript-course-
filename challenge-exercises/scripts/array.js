//11l
function minMax(nums) {
	const result = {
		min: nums[0],
		max: nums[0]
	}
	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		if (value < result.min || value === result.min) {
			result.min = value;
		}
		if (value > result.max || value === result.max) {
			result.max = value;
		}
	}
	return result;
}
console.log(minMax([1, -3, 5]));
console.log(minMax([]));
console.log(minMax([3]))

//11n
function countWord(words) {
	let result = {};
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (!result[word]) {
			result[word] = 1;
		} else {
			result[word]++;
		}
	}
	return result;
}
console.log(countWord(['apple', 'grape', 'apple', 'apple']));
