function bubbleSort(arr) {
   for (var j = arr.length; j > 0; j--) {
   		var temp = arr[0]
	   	compare(temp, arr, j);
	   }
	return arr;
}

function compare(temp, arr, j) {
	for (var i = 1; i <  j ; i++) {	
		if (temp > arr[i]) {
			swap(temp, arr, i);
		} else {
			temp = arr[i];
		}
	}	
}
function swap(temp, arr, i) {
	arr[i - 1] = arr[i];
	arr[i] = temp;
}
// function selectionSort(arr) {
// 	if (arr.length === 0) {
// 		return arr;
// 	}
// 	var biggest = arr[0];
// 	for (var i = 0; i <  arr.length - 1; i++) {
// 		if (biggest < arr[i + 1]) {
// 			biggest = arr[i + 1];
// 		}
// 	}
// 	arr.splice(arr.indexOf(biggest), 1);
// 	return bubbleSort(arr).concat(biggest);
// }