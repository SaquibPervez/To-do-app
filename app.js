var input_item = document.getElementById("input_item")
var parent = document.getElementById("parent")

function edit(element){ 
    var indexnumber  = element.id;
    console.log(indexnumber);
    var notesArr = JSON.parse(localStorage.getItem("notes"))
    var editprompt = prompt("Enter Edit Value...!")
    notesArr.splice(indexnumber,1, editprompt);
    localStorage.setItem("notes",JSON.stringify(notesArr));
    renderUI();
}

function deletes(element){
    var notesArr = JSON.parse(localStorage.getItem("notes"))
    var index = element.id;
    notesArr.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    renderUI();
}

var notesArr =[]
function add_item(){
    // console.log("additem", input_item.value)

    if(input_item.value.length < 3){
        alert("Enter a correct item...!")
        return;
    }
    var getnodes = localStorage.getItem("notes")
    console.log("getnodes", getnodes)

    if(getnodes == null){
        var temparr = [input_item.value]
        localStorage.setItem("notes", JSON.stringify(temparr))
    }else{
        var temparr = JSON.parse(getnodes);
        temparr.unshift(input_item.value);
        localStorage.setItem("notes", JSON.stringify(temparr));
    }
    renderUI();
    input_item.value = "";
}
function renderUI(){
    var notesArr = JSON.parse(localStorage.getItem("notes"))

    var UI = ""

for(var i = 0; i<notesArr.length; i++){
 UI += `<div class="alert alert-primary d-flex justify-content-between" role="alert">
 ${notesArr[i]}
<div>
    <i onclick = "edit(this)" id=${i} class="fa-solid fa-pen-to-square"></i>
    <i onclick = "deletes(this)" id=${i} class="fa-solid fa-trash"></i>
</div>
</div>`;
}
// console.log("UI", UI);
  parent.innerHTML = UI;
}