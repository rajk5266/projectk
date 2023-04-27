var form = document.getElementById('addForm');
var item = document.getElementById('items');

form.addEventListener('submit', addItem)
item.addEventListener('click', removeitem)

function addItem(e){
e.preventDefault();

var newitem = document.getElementById('item').value;

var newele = document.createElement('li');
newele.className = 'list-group-item';
// console.log(newele)
newele.appendChild(document.createTextNode(newitem));

var deletebtn = document.createElement('button');
deletebtn.className = 'btn btn-danger btn-sm float-right delete'
deletebtn.appendChild(document.createTextNode('x'))
newele.appendChild(deletebtn)

item.appendChild(newele)

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

let battan = document.querySelectorAll('button')
for(let i=0; i<battan.length; i++)
{
    battan[i].style.marginRight = '40px'

}

var li = document.querySelectorAll('li')

li.forEach(function(i)
{
    var button = document.createElement('button');
    button.style.backgroundColor = 'green'
    button.style.float = 'right'
    button.style.marginRight = '-78px'
    button.appendChild(document.createTextNode('EDIT'))
    i.appendChild(button)
})