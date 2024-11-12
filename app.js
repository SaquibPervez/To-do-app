var input_item = document.getElementById("input_item")
var parent = document.getElementById("parent")

function edit(element){

    var editprompt = prompt("Enter edit value..")
   element.parentNode.parentNode.firstChild.textContent = editprompt;

}

function deletes(element){
    element.parentNode.parentNode.remove();
}

function add_item(){
    // console.log("additem", input_item.value)

    if(input_item.value.length < 3){
        alert("Enter a correct item...!")
        return;
    }

 var UI = `<div class="alert alert-primary d-flex justify-content-between" role="alert">
 ${input_item.value}
<div>
    <i onclick = "edit(this)" class="fa-solid fa-pen-to-square"></i>
    <i onclick = "deletes(this)" class="fa-solid fa-trash"></i>
</div>
</div>`

// console.log("UI", UI);
  parent.innerHTML += UI;
  input_item.value = "   ";
}