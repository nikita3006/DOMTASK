
// //add hello before Item lister 

// var  newDiv = document.createElement('div')
// newDiv.className='hello';
// newDiv.id='hello';
// newDiv.setAttribute('title','HelloDiv');
// var newDivText=document.createTextNode('HELLO')
// newDiv.appendChild(newDivText)


//  newDiv.appendChild(newDivText);
 
//  var container = document.querySelector('header.container');
//  var h1 = document.querySelector('header h1');
//  console.log(newDiv);
//  container.insertBefore(newDiv , h1);


var newDiv = document.createElement('div');
var newDivText = document.createTextNode('HELLO');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');//header l ander ka container ko grab
var h1 = document.querySelector('header h1');
console.log(h1);
container.insertBefore(newDiv, h1);//kha p inert karna hai
console.log(itemList);



//add hello before Item1 

var  newDiv = document.createElement('div')
var newdivText=document.createTextNode('HELLO')
 newDiv.appendChild(newdivText)
 var Container = document.querySelector('header .container')
 
//  var h1=document.querySelector('header h1')
//  console.log(Container);
// console.log(h1)
// console.log(newDiv);


// Container.insertBefore(newDiv,h1)



// var classList=document.querySelector('div .list-group');
// var ItemList=document.querySelector('div li');//var ItemList=document.querySelector('div .class-list-group');
// console.log(classList);
// console.log(ItemList);
// classList.insertBefore(newDiv,ItemList);


