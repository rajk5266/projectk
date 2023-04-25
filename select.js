var a = document.getElementsByClassName('list-group-item')

for(let i=0; i<a.length; i++)
{
    if(i == 2)
    {
        a[i].style.backgroundColor = 'green'
    } 
   a[i].style.fontWeight = 'bold'

}