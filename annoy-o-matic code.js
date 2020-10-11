// var answer=prompt("Are we there yet");
// while(answer !== "yes" && answer !== "yeah"){
// 	var answer=prompt("Are we there yet");
// }
// alert("YAY, we finally made it!!");


// if(answer ==="yes"){
// 	alert("Yay, we made it!!");    
// }
// else{
// 	var answer=prompt("Are we there yet?");
// }

/*If we use  if else, it will ask only onetime i.e., 1st time it will ask, if the answer is "no" or some other than "yes" and "yeah" it will ask one more time and it ends. */


//VERSION 2
var answer=prompt("Are we there yet");
while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1){
	var answer=prompt("Are we there yet");
}
alert("YAY, we finally made it!!");

