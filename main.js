let form1 = document.querySelector('#addForm');
let submit = document.querySelector('#submit');
let items = document.querySelector('#items');

form1.addEventListener('submit', addItem)
items.addEventListener('click', removeItem)
items.addEventListener('click',editItem)
document.querySelector('#item1').addEventListener('keyup',toggleButton)
function addItem(e) {
    e.preventDefault();;

    let newItem = document.querySelector('#item1').value;
    let a = document.createElement('span')
    a.innerHTML=newItem
    if(newItem.trim() == '' || newItem.trim() == null){
        return false;
    }
    let li = document.createElement('li')
    li.className = 'list-group-item';


    let deleteButton = document.createElement('button')
    deleteButton.className = "delete btn-danger btn btn-sm float-right"
    deleteButton.appendChild(document.createTextNode('delete'))

    let editButton = document.createElement('button')
    editButton.className = "edit btn-success btn btn-sm float-right"
    editButton.appendChild(document.createTextNode('edit'))

    li.appendChild(a)
    li.appendChild(deleteButton)
    li.appendChild(editButton)
    items.appendChild(li)

    document.querySelector('#item1').value="";
  
}
function removeItem(e){
    e.preventDefault();
    // DELETE 
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentNode;
            items.removeChild(li);
        }
    }
}
function editItem(e){
    e.preventDefault();
    
    console.log(e.target)
    // EDIT 
    if(e.target.classList.contains('edit')){
        let li = e.target.parentNode;
        var x=prompt("Enter New Text")
        li.childNodes[0].innerText=x
    }
}
function toggleButton(){
    document.querySelector('#submit').disabled = false;
}