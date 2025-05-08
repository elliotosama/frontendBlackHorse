// async function fetchData() {
//   let response = await fetch('https://dummyjson.com/products')
//   if(!response.ok){
//     throw new Error('some thing went wrong')
//   }
//   let data = await response.json();
//   showData(data);
// }




// function showData(result) {
//   let objects = result['products'];
//   objects.forEach(element => {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerHTML = element['title'];
//     let p = document.createElement('p');
//     p.innerHTML = element['description'];
//     let price = document.createElement('div');
//     price.className = 'price';
//     price.innerHTML = `${element['price']}$`;
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(price);
//     document.body.appendChild(div);
//   });
// }



// fetchData();









/*
 * 
 * jquery selector
 * 
 * $("*") 	Selects all elements 	
$(this) 	Selects the current HTML element 	
$("p.intro") 	Selects all <p> elements with class="intro" 	
$("p:first") 	Selects the first <p> element 	
$("ul li:first") 	Selects the first <li> element of the first <ul> 	
$("ul li:first-child") 	Selects the first <li> element of every <ul> 	
$("[href]") 	Selects all elements with an href attribute 	
$("a[target='_blank']") 	Selects all <a> elements with a target attribute value equal to "_blank" 	
$("a[target!='_blank']") 	Selects all <a> elements with a target attribute value NOT equal to "_blank" 	
$(":button") 	Selects all <button> elements and <input> elements of type="button" 	
$("tr:even") 	Selects all even <tr> elements 	
$("tr:odd") 	Selects all odd <tr> elements
 */


/**
 * jquery events
 * 
 * click 	keypress 	submit 	load
dblclick 	keydown 	change 	resize
mouseenter 	keyup 	focus 	scroll
mouseleave 	  	blur 	unload
 */




// $("button").click(function () {
//   console.log('hello world');
// })






// on is to attach more than one event to the element
// $("button").on({
//   mouseover: function(){
//     console.log('mouseover');
//   },
//   click: function() {
//     console.log('clicked');
//   },
//   dblclick: function(){
//     console.log('hello world');
//   }
// })


// --------------------------------------


// html
/**
 * html()
 * text()
 * val()
 * attr("attrName") => get
 * attr("name", "value");
 * append()
 * prepend()
 * after()
 * before()
 * remove()
 * empty()
 */

// css

/**
 *addClass()
  removeClass()
  toggleClass()
  css('propertyName);
  css('name', 'value');
  css({'one': 'value', 'two: 'value'});

 */


 // dom traversing
  /**
  * .parent
  * parents()
  * parentsUntil("body");
  * children()
  * find()
  * siblings()
  * next()
  * prev()
  * prevAll()
  * prevUntil
  * first()
  * last()
  * eq(index);
  */

// $('p').eq(0).css('background-color', 'red');

// $('div').dblclick(function () {
//   console.log('hello after clicking the div')
// })



// $('div').text('hello using html')

// $('input').val('hello from jquery')

// document.querySelector('input').value = 'hello from javascript'


// let one = $('div').css({'background-color': 'red', 'font-size': '30px'});
// console.log(one)


// $('button').click(function () {
//   $('div').toggleClass('active')
// })


// let one = $('p').parentsUntil('html');
// console.log(one)

let one = $('h1').eq(0);
console.log(one)