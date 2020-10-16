function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,7,8,9]);

//================ To know which functions are there ==============================

console.log("Call the functions isUniform(), sumArray(), max()");


//========================== isUniform ============================================

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}                                              //forEach can't be used here because once the condition(arr[i] !== first) it will return TRUE.So here FOR is used.

//========================== sumArray() =============================================

// function sumArray(arr){
// 	var total = 0;
// 	for(var i = 0; i < arr.length; i++){
//        total += arr[i];
// 	}
// 	return total;
// }


//======================== sumArray() using forEach ===================================
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
       total += element;
	});
	return total;
}

//========================= max() ======================================================

function max(arr){
	var max = 0;
	for(var i = 1; i< arr.length; i++){
	   if(max < arr[i]){
	     max = arr[i];
	   }
	}
	return max;
}                                       //In for loop, i=1 because index starts from 0.

//======================== max() using forEach ==========================================

// function max(arr){
// 	var max = 0;
// 	arr.forEach(function(element){
// 		if(max < element){
// 			max = element;
// 		}
// 	});
// 	return max;
// }