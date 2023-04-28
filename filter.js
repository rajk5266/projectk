var form = document.getElementById('addForm');
var item = document.getElementById('items');
var itemList = document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
item.addEventListener('click', removeitem)
filter.addEventListener('keyup', filterItems)

for(let i=0; i<itemList.length; i++)
{
    var editBtn = document.createElement('button')
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'))
    itemList[i].appendChild(editBtn)
}

function addItem(e){
    e.preventDefault();
    var inputvalue = document.getElementById('item').value;
    var description = document.getElementById('description').value
    
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    var newtext = document.createTextNode(inputvalue)
    var descriptionNode = document.createTextNode(" "+description)
    li.appendChild(newtext);

    li.appendChild(descriptionNode)
    
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('x'))
    li.appendChild(deletebtn)
    
    var editBtn = document.createElement('button')
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'))
    li.appendChild(editBtn)

    item.appendChild(li)
    
  }
function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure'))
        {
            var li = e.target.parentElement
            item.removeChild(li)
        }
    }
}

function filterItems(e)
{
    var text =  e.target.value.toLowerCase();
    var items = item.getElementsByTagName('li')
    Array.from(items).forEach(function(itam){
    var itemname = itam.firstChild.textContent;
    var desc = itam.childNodes[1].textContent

    if(itemname.toLowerCase().indexOf(text) != -1 || desc.toLocaleLowerCase().indexOf(text) !=-1)
    {
        itam.style.display = 'block'
    }
    else{
        itam.style.display = 'none'
    }
})
}
