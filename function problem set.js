function isEven(x){
	return(x % 2 === 0);
}

function factorial(num){
	//declare result variable
	var result=1;
	//calculate factorial and store value in result
    for(var i=2; i <= num; i++){
    	//result= result * i;
    	result *= i;
    }
    //4 x 3 x 2 x 1
	//return the result variable
     return result;
}

//To multiply from the given number.ie., 4!= 4 x 3 x 2 x 1

// function factorial(num){
// 	if(num === 0){
// 		return 1;
// 	}
// 	var result = num;
// 	for(var i = num-1; i <= num; i--){
//       result *= i;
// 	}
// 	return result;
// } 


function kebabToSnake(str){
	var newStr = str.replace(/-/g,"_")
	return(newStr);
}