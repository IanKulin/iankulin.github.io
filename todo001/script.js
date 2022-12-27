// Classic Todo (without persistance)
// Ian - 25/12/22

var txtItem = document.getElementById("txtItem")
var btnItem = document.getElementById("btnAddItem")
var ulItems = document.getElementById("ulItems")


function onKeyPress(event) {
    if (event.code === "Enter") {
        addNewItem()  
    }
}


function addNewItem() {
    if (txtItem.value.length > 0) {
        
        var btnCheck = document.createElement("button")
        btnCheck.innerText = "✔️"
        btnCheck.type="button"
        btnCheck.classList.add("btnCheck")
        btnCheck.onclick = onBtnCheck

        var btnDelete = document.createElement("button")
        btnDelete.innerText = "❌"
        btnDelete.type="button"
        btnDelete.classList.add("btnDelete")
        btnDelete.onclick = onBtnDelete

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(txtItem.value));
        li.onclick = onListItemClick
        li.appendChild(btnCheck)
        li.appendChild(btnDelete)
        ulItems.appendChild(li);

        txtItem.value = ""
    }
}


function onListItemClick(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed") 
    }
}

function onBtnDelete(event) {
    event.target.parentNode.remove(); 
}

function onBtnCheck(event) {
    event.target.parentNode.classList.toggle("completed") 
}


txtItem.addEventListener("keydown", onKeyPress)
btnItem.addEventListener("click", addNewItem)

var links = document.getElementsByTagName('li');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = onListItemClick;
    console.assert(link.childNodes.length === 3)
    link.childNodes.item(1).onclick = onBtnCheck
    link.childNodes.item(2).onclick = onBtnDelete
}


