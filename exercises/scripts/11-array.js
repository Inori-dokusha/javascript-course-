/*
//11a
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

//11b
function getLastValue(array) {
	let lastIndex = array.length - 1;
	return array[lastIndex];
}
console.log(getLastValue([10, 20, 30]));
console.log(getLastValue(['Hai', 'Hello', 'Good']));

//11c
function arraySwap(array) {
	const lastIndex = array.length - 1;
	const lastValue = array[lastIndex];
	const firstValue = array[0];

	array[0] = lastValue;
	array[lastIndex] = firstValue;

	return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['Hello', 'Good', 'Cool']));

//11d
for (let i = 0; i <= 10; i += 2) {
	console.log(i);
}

//11e
for (let i = 5; i >= 0; i--) {
	console.log(i);
}

//11f
let i = 0;
while (i <= 10) {
	i += 2;
	console.log(i);
}

i = 5;
while(i >= 0) {
	i--;
	console.log(i);
}
*/
//11g
/*
const array = [1, 2, 3];
const result = [];
for (let i = 0; i < array.length; i++) {
	result.push(array[i] + 1);
}
console.log(result);

//11h
function addOne(array) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] + 1);
	}
	return result;
}
console.log(addOne([-2, -6, 99]));

//11i
function addNum(array, num) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] + num)
	}
	return result;
}
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

//11j
function addArray(array1, array2) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array1[i] + array2[i]);
	}
	return result;
}
console.log(addArray([1, 1, 2], [1, 1, 3]));
console.log(addArray([1, 2, 3], [4, 5, 6]));

//11k
function countPositive(nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			result++
		}
	}
	return result;
}
console.log(countPositive([1, -3, 5]));
*/

//11o
/*
let words = ['Hello', 'World', 'search', 'good'];
let index = 1;
for (let i = 0; i < words.length; i++) {
	if (words[i] === 'search') {
		index = i;
		//11p
		break;
	}
}
console.log(index);

words = ['not', 'found'];
index = -1;
for (let i = 0; i < words.length; i++) {
	if (words[i] === 'search') {
		index = i;
		break;

	}
}
console.log(index);
*/

//11q
function findIndex(array, word) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === word) {
			return i;
		}
	}
	return -1;
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

/*
//11r
function removeEgg(foods) {
	let result = [];
	for (var i = 0; i < foods.length; i++) {
		if (foods[i] === 'egg') {
			continue;
		}
		result.push(foods[i]);
	}
	return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
*/

/*
//11s update from 11r
function removeEgg(foods) {
	let result = [];
	let eggRemoved = 0;
	for (var i = 0; i < foods.length; i++) {
		if (foods[i] === 'egg' && eggRemoved < 2) {
			eggRemoved++;
			continue;
		}
		result.push(foods[i]);
	}
	return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
*/

//11t
function removeEgg(foods) {
	const foodscopy = foods.slice();
	const reverseFoods = foodscopy.reverse();
	const result = [];
	let eggRemoved = 0;
	for (var i = 0; i < foods.length; i++) {
		if (foods[i] === 'egg' && eggRemoved < 2) {
			eggRemoved++;
			continue;
		}
		result.push(reverseFoods[i]);
	}
	return result.reverse();
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));