var a = document.getElementsByClassName('list-group-item')

for(let i=0; i<a.length; i++)
{
   a[i].style.fontWeight = 'bold'
}
var list = document.querySelector('.list-group-item:nth-child(2)')
list.style.color = 'blue'
var five = document.querySelector('li:last-child')
five.style.fontWeight = 'bold'
five.style.backgroundColor = 'red'

var input = document.querySelector('input')
input.style.backgroundColor = 'yellow'