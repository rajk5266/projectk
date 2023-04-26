var itemlist = document.querySelector('#items')
// console.log(itemlist)
// 1. parentelement
itemlist.parentElement.style.backgroundColor = 'grey';
// 2. lastelementchild
itemlist.lastElementChild.style.color = 'red'
// 3. last child

// itemlist.lastChild.style.backgroundColor = 'coral'
// nothing will happen as the last child does not exist.

// 4. createchild

// 5. firstelementchild
itemlist.firstElementChild.style.backgroundColor = 'lightgrey';

// 6. firstchild
// itemlist.firstChild.color = 'red'
// the firstchild will grab a line brake, hence manipulating it doesn't possible.

// 7. next sibling
var header = document.querySelector('header')
// a.nextSibling.style.color = 'red'
// as the next sibling doesn't include any element, it will not have any effect

// 8. nextelementsibling
header.nextElementSibling.style.fontWeight = 'bold';

// 9. previoussibling
var items = document.querySelector('.list-group');
// items.previousSibling.style.color = 'red'
 
// 10. previouselementsibling
items.previousElementSibling.style.color = 'white'

// 11. create element
let newdiv = document.createElement('div');
newdiv.className = 'hello'
newdiv.id = 'helloooo'

// 12. setAttribute
newdiv.setAttribute('title', 'hello div')

// 13. craetetextnode
let newdivtext = document.createTextNode('HEllo world')
// 14. appendchild
newdiv.appendChild(newdivtext)

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1')
newdiv.style.fontSize = '30px'
container.insertBefore(newdiv, h1)
// 
let newele = document.createElement('li')
newele.className = 'list-group-item'
// newele.setAttribute('title', 'hello h2')

let newweletext = document.createTextNode('HElloooo world')
newele.appendChild(newweletext)
let start = document.querySelector('ul')
let end = document.querySelector('li')
// let end1 = end


start.insertBefore(newele, end)

