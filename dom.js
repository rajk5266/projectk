
var x = document.getElementById('header-title')
let main = document.getElementById('main-header')
main.style.borderBottom = 'solid 6px blue'
// x.style.borderBottom = 'solid 5px #000'

var a = document.getElementsByClassName('list-group-item')

for(let i=0; i<a.length; i++)
{
   a[i].style.backgroundColor = 'yellow'
   a[i].style.fontWeight = 'bold'
   a[i].textContent = 'sold out'

}