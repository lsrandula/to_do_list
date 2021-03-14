var userinput = document.querySelector("input");
var button0 = document.querySelector("button");
var ul = document.querySelector("ul");


function checkInputLength(){
    if (userinput.value.length > 0) {
        return true;
    }
    return false;
}

function createListElement(){
    //console.log(userinput.value);
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.className = "no_line";
    //li.className = "done";
    li.appendChild(document.createTextNode(userinput.value + " "));
    button.appendChild(document.createTextNode("Delete"));
    li.addEventListener("click", lineThroughAfterClick);
    button.addEventListener("click", deleteAfterClick);
    li.appendChild(button);
    ul.appendChild(li);
    

    userinput.value = "";
}

function addToListAfterClick(){
    //console.log("Submit!");
    if (checkInputLength()) {
        createListElement();
    }
}

function addToListAfterEnter(event){
    //console.log(event);
    if (checkInputLength() && event.keyCode === 13) {
        createListElement();
    }
}

function lineThroughAfterClick(event){
    //console.log(li);
    //console.log(event.target)
    //var li = document.querySelector("li");
    event.target.classList.toggle("done");
}

function deleteAfterClick(event){
    ul.removeChild(event.target.parentElement);
}
button0.addEventListener("click", addToListAfterClick);
userinput.addEventListener("keydown", addToListAfterEnter);


