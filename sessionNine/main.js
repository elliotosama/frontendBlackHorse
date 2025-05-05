// let element = document.createElement('h1');


// element.setAttribute('name', 'inputField');

// element.innerHTML = 'hello from osama';


// let text = document.createTextNode('hello from js');

// element.appendChild(text);

// document.body.appendChild(element)

// console.log(document.querySelector('.hello'))


// let element = document.querySelector('div');

// console.log(element.getAttribute('id'));



// for(let i = 1;i<=1000;i++) {
//   let parent = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// h1.innerHTML = `title ${i}`;
// p.innerHTML = 'hello from this page and this is my page';

// parent.appendChild(h1);
// parent.appendChild(p);
// document.body.appendChild(parent);
// }



















// for(let i = 1; i<= 100 ;i++) {
//   let parent = document.createElement('div');



//   let h1 = document.createElement('h1');



//   let p = document.createElement('p');

//   h1.innerHTML = `title ${i}`
//   p.innerHTML = 'hello from this page and this is my page';

//   parent.appendChild(h1);
//   parent.appendChild(p);

//   document.body.appendChild(parent);
// }



// let element = document.querySelector('div');

// let divTwo = element.cloneNode(true);


// document.body.appendChild(divTwo);
// element.onmouseover = function () {
//   console.log('clicked');
// }




// element.addEventListener('mouseover', function () {
//   console.log('clicked from add event function');
// })




// let element = document.querySelector('div');

// element.onclick = function () {
//   console.log('click one');
// }

// element.onclick = function () {
//   console.log('click two')
// }


// element.addEventListener("click", function () {
//   console.log('click one')
// })
// element.addEventListener("click", function () {

// })

/**
 * click one
 * click two
 */




// let element = document.querySelector('div');

// element.addEventListener('click', function () {
//   let newElement = element.cloneNode(true)
//   newElement.className = 'clone';
//   document.body.appendChild(newElement)
// })


// document.addEventListener('mouseover', function(event) {
//   if(event.target.className === 'clone') {
//     console.log('cloned')
//   }
// })


// =======================================

// window.open('https://google.com')
// alert('hello from osama')
// confirm('do you want to continue')
// prompt('hello from osama')


// let div1 = document.querySelector('#one');
// let div2 = document.querySelector('#two');

// let intervalId;

// div1.onclick = function () {
//   intervalId = setInterval(function () {
//     console.log('started')
//   }, 2000)
// }

// div2.onclick = function () {
//   clearInterval(intervalId)
// }

// div.onclick = function () {
//   setTimeout(function () {
//     console.log('hello after 3 seconds')
//   }, 3000);
// }


// div.onclick = function () {
//   setInterval(function () {
//     console.log('hello from set interval')
//   }, 3000)
// }


let element = document.getElementById('one')


// element.style.cssText = 'font-size: 40px; color: blue';

element.style.setProperty('background-color', 'green', 'important');
console.log(element.style.getPropertyValue('background-color'));