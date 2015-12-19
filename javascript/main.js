var difficulty = 1;
var size = 5;
var board = [];

function boardSizeChange(input){
	if(input == "small"){
		size = 3;
	}
	else if(input == "large"){
		size = 8;
	}
	else{
		size = 5;
	}
	generator(size, difficulty);
}

function boardDifficultyChange(input){
	if(input == "easy"){
		difficulty = .01;
	}
	else if(input == "hard"){
		difficulty = 3;
	}
	else{
		difficulty = 1;
	}
	generator(size, difficulty);
}

function flag(){
	var target = (event.currentTarget.id);
	if(document.getElementById(target).style.backgroundColor == "red"){
		document.getElementById(target).style.backgroundColor = "lightgrey";
		document.getElementById(target).style.color = "lightgrey";
	}
	else{
		document.getElementById(target).style.backgroundColor = "red";
		document.getElementById(target).style.color = "red";
	}
	return false;
}

function mineFunction(){
	var target = (event.currentTarget.id);
	document.getElementById(target).style.backgroundColor = "black";
	alert("BOOM");
}

function blockFunction(){
	var target = (event.currentTarget.id);
	document.getElementById(target).style.color = "black";
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
return array;
}	
function boardGen(input){
	for(var x = 0; x <= input; x++){
		board.push([]);
	}
}
function minePlacement(input, size){
	for(var x = 0; x<=size; x++){
		var gen = Math.random();
		gen = gen * input;
		gen = Math.floor(gen);
		for(var y = 0; y <= gen; y++){
			board[x].push(9);
		}
		while(board[x].length <=size){
			board[x].push(0);
		}
	}
	for(j in board){
		shuffle(board[j])
	}
	for(var k = 0; k<=size; k++){
		for(var x = 0; x<=size; x++){
			var counter = 0;
			if(board[k] != undefined && board[k][x + 1] == 9){
				counter += 1;
			}
			if(board[k+1] != undefined && board[k+1][x + 1] == 9){
				counter += 1;
			}
			if(board[k-1] != undefined && board[k-1][x + 1] == 9){
				counter += 1;
			}
			if(board[k+1] != undefined && board[k+1][x] == 9){
				counter += 1;
			}
			if(board[k-1] != undefined && board[k-1][x] == 9){
				counter += 1;
			}
			if(board[k] != undefined && board[k][x - 1] == 9){
				counter += 1;
			}
			if(board[k+1] != undefined && board[k+1][x - 1] == 9){
				counter += 1;
			}
			if(board[k-1] != undefined && board[k-1][x - 1] == 9){
				counter += 1;
			}
			if(board[k][x] != 9){
				board[k][x] = counter;
			}
		}
	}
}
function populate(input){
	var target = document.getElementById("board");
	for(x in board){
		for(var k = 0; k<=input; k++){
			if(board[x][k] == 9){
				var mine = document.createElement("div");
				var text = document.createTextNode(board[x][k]);
				mine.appendChild(text);
				mine.className = "mine";
				mine.id = "row " + x + " number " + k;
				mine.onclick = mineFunction;
				mine.oncontextmenu = flag;
				target.appendChild(mine);
			}
			else{
				var block = document.createElement("div");
				var text = document.createTextNode(board[x][k]);
				block.appendChild(text);
				block.className = "block";
				block.id = "row " + x + " number " + k;
				block.onclick = blockFunction;
				block.oncontextmenu = flag;
				target.appendChild(block);
			}
		}
	}
}

function boardSize(input){
	var target = document.getElementById("board");
	var theSize;
	theSize = (input+1) * 42;
	target.style.width = theSize + "px";
}

function generator(size, difficulty){
	var target = document.getElementById("board");
	board = [];
	target.innerHTML = "";
	boardGen(size);
	minePlacement(difficulty, size);
	populate(size);
	boardSize(size);
}
generator(size,difficulty);
