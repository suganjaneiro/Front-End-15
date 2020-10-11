console.log("Numbers between -10 and 19");
for(var i=-10; i<20; i++){
	console.log(i);
}
// ===============================================================
console.log("Even Numbers between 10 and 40");
for(var i=10; i<=40; i++){
	if(i % 2 === 0)
		console.log(i);
}
// ===============================================================
console.log("Odd Numbers between 300 and 333");
for(var j=300; j<=333; j++){
	if(i % 2 !== 0)
		console.log(j);
}
// ===============================================================
console.log("Numbers divisible by 5 AND 3 between 5 and 50");
for(var i=5; i<=50; i++){
	if(i % 3 === 0 && i % 5 === 0)
		console.log(i);
}




/*We can use any variable but we need to declare before it is used*/
/*We can use the same variable anytime because we are using the particular variable inside the loop only*/
/*To find even numbers, if the starting number is even, we can increment the i value by 2.
 If the starting number is odd, it won't give the correct result.
 To obtain the correct result, use if statement inside the for loop.  */