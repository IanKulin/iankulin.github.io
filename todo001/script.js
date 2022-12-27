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
        
        var btnDel = document.createElement("button")
        btnDel.innerText = "❌"
        btnDel.type="button"
        btnDel.onclick = deleteItem

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(txtItem.value));
        li.onclick = listItemClick
        li.appendChild(btnDel)
        ulItems.appendChild(li);

        txtItem.value = ""
    }
}


function listItemClick(event) {
    if (event.target.localName === 'li') {
        event.target.classList.toggle("completed") 
    }
}


function deleteItem(event) {
    event.target.parentNode.remove(); 
}


txtItem.addEventListener("keydown", respondToKeyPress)
btnItem.addEventListener("click", addNewItem)

var links = document.getElementsByTagName('li');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = listItemClick;
    link.lastChild.onclick = deleteItem
}


