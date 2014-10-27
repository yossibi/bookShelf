function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};


function reset(e){
	document.getElementById('bookName').value = "";
	document.getElementById('authorName').value = "";
	document.getElementById('score').value = "";
}

function addBook(){
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	var book = new Book(bookName, authorName, score);
	addToList(book);
	reset();
}

function clearList(){
	var ul = document.getElementById("bookList");	
	ul.innerHTML = '';
}

function removeItem(e) {
	e.target.parentElement.remove();
}

function submitEdit(e) {
	if (e.keyCode == 13) {
		e.target.parentElement.parentElement.children[3].style.display = "inline";
		var newValue = e.target.value;
		var div = e.target.parentElement;
		div.innerHTML = newValue;
	}
}

function editItem(e){
	var divWeWantToReplace = e.target.parentElement.children[0];
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("value", divWeWantToReplace.innerHTML);
	input.setAttribute("onkeyup", "submitEdit(event)");
	divWeWantToReplace.innerHTML = '';
	divWeWantToReplace.appendChild(input);
	e.target.style.display = "none";
}

function createDiv(html, className) {
	var div = document.createElement("div");
	div.innerHTML = html;
	div.className = className;
	return div;
}

function createSpan(html, onclickString) {
	var span = document.createElement("span");
	span.innerHTML = html;
	span.setAttribute("onclick",onclickString);
	return span;
}

function createLi(childrenArr) {
	var newElement = document.createElement("li");	
	var i;
	for (i=0;i<childrenArr.length;i++) {
		newElement.appendChild(childrenArr[i]);	
	}
	return newElement;
}

function addToList(book) {
		var childrenArray = [];
		childrenArray.push(createDiv(book.bookName, "left"));
		//var bookNameDiv = document.createElement("div");
		//bookNameDiv.innerHTML = book.bookName;
		//bookNameDiv.className = "left";
		
		childrenArray.push(createDiv(book.authorName, "center"));
		//var authorNameDiv = document.createElement("div");
		//authorNameDiv.innerHTML = book.authorName;
		//authorNameDiv.className = "center";
		childrenArray.push(createDiv(book.score, "right"));
		//var scoreDiv = document.createElement("div");
		//scoreDiv.innerHTML = book.score;
		//scoreDiv.className = "right";
		childrenArray.push(createSpan("X", "removeItem(event)"));
		//var x = document.createElement("span");
		//x.innerHTML = "X";
		//x.setAttribute("onclick", "removeItem(event)");
		childrenArray.push(createSpan("edit", "editItem(event)"));
		//var edit = document.createElement("span");
		//edit.setAttribute("onclick", "editItem(event)");
		//edit.innerHTML = "edit";
		var newLi = createLi(childrenArray);
		//newElement.appendChild(bookNameDiv);
		//newElement.appendChild(authorNameDiv);
		//newElement.appendChild(scoreDiv);
		//newElement.appendChild(edit);
		//newElement.appendChild(x);
		var ul = document.getElementById("bookList");
		ul.appendChild(newLi);
}
