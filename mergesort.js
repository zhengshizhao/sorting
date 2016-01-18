function merge(leftArr, rightArr) {
	var sortedArr = [];
	// if(leftArr.length > rightArr.length){
	// 	merge(rightArr, leftArr);
	// }
    var i = 0;
    var j = 0 ;

    // var leftArritem = leftArr[i];
    // var leftArritem = leftArr[];
    if (leftArr.length === 0) return rightArr;
    if(rightArr.length === 0) return leftArr;
    
    while (i < leftArr.length  && j < rightArr.length ) {  
    	if(leftArr[i] < rightArr[j]) {
			sortedArr.push(leftArr[i]);
			i++;  
		} else if (leftArr[i] > rightArr[j]) {
	 		sortedArr.push(rightArr[j]);
	 		j++;
	 	}

    }

	if (i === leftArr.length) sortedArr =sortedArr.concat(rightArr.slice(j));
	if (j === rightArr.length) sortedArr = sortedArr.concat(leftArr.slice(i));

	// for (var i = 0; i < leftArr.length;) {
	// 	for (var j = 0; j < rightArr.length;){
	// 		if(leftArr[i] < rightArr[j]) {
	// 			sortedArr.push(leftArr[i]);
	// 			i++;
	// 		} else {
	// 			sortedArr.push(rightArr[j]);
	// 			j++;
	// 		}
	// 	}
	// }
	return sortedArr;
}

function split(arr) {
	var middle = Math.ceil(arr.length / 2);
	var firstHalf = arr.slice(0, middle);
	var secondHalf = arr.slice(middle);
	return [firstHalf, secondHalf];
}

function mergeSort(arr) {
	if (arr.length === 1 || arr.length === 0) {
		return arr;
	}
	var arrays = split(arr)
	var left = arrays[0];
	var right = arrays[1];
	
    
	return merge(mergeSort(left), mergeSort(right));


}