// Classic Todo (without persistance)
// Ian - 25/12/22

var txtItem = document.getElementById("txtItem")
var btnItem = document.getElementById("btnAddItem")
var ulItems = document.getElementById("ulItems")


function respondToKeyPress(event) {
    if (event.code === "Enter") {
        addNewItem()  
    }
}


function addNewItem() {
    if (txtItem.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(txtItem.value));
        ulItems.appendChild(li);
        li.onclick = listItemClick
        txtItem.value = ""
    }
}


function listItemClick(event) {
    event.target.classList.toggle("completed") 
}


txtItem.addEventListener("keydown", respondToKeyPress)
btnItem.addEventListener("click", addNewItem)

var links = document.getElementsByTagName('li');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = listItemClick;
}


