
var todos = [];
var input = prompt("What do you want to do?");

while(input !== "quit"){
	if(input === "list"){
	    listTodo();
    }
    else if(input === "new"){
    	addTodo();
    }
    else if(input === "delete"){
    	deleteTodo();
    }
    var input = prompt("What do you want to do?");
}
console.log("Ok, You Quit The App");


function listTodo(){
	console.log("************");
	todos.forEach(function(todo,i){
		console.log(i+ ": " +todo);
	});
	console.log("************");
}

function addTodo(){
	var newTodo = prompt("Enter the new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	var index = prompt("Enter the index of the todo to be deleted");
    todos.splice(index,1);
    console.log("Deleted Todo");
}