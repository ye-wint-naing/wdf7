let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;


val = document.links; //HTMLCollection
// val = document.links[0];
// val = document.links[3];
// val	= document.links[3].id;
// val = document.links[3].className; //string
val = document.links[3].classList; //DOMTokenList
val = document.links[3].classList[0];
val	= document.links[3].classList[1];



val	= document.forms; //HTMLCollection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList; //DOMTokenList
val = document.forms[0].action;
val = document.forms[0].method;


val = document.images; //HTMLCollection
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList; //DOMTokenList
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].src;
val = document.images[0].getAttribute("src");
val = document.images[0].getAttribute("type");


val = document.scripts; //HTMLCollection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("src");
val	= document.scripts[0].getAttribute("type");


// console.log(val);

// Change Styling
// document.getElementById("tasktitle").style.backgroundColor ="green";
// document.getElementById("tasktitle").style.color="#fff";
// document.getElementById("tasktitle").style.padding="5px";


// Change Content
// document.getElementById("tasktitle").textContent = '"My List"';
// document.getElementById("tasktitle").innerText = "My Tasks";
// document.getElementById("tasktitle").innerHTML = '<span style="color:blue;">My Jobs</span>';



// Call by Class Name
let lis = document.getElementsByClassName("list-group-item"); //HTMLCollection
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color ="blue";
// lis[1].textContent ="Have to visit" ;


// Call by Tag (Element)
let litags = document.getElementsByTagName('li'); //HTMLCollection
// console.log(litags);
// console.log(litags[3]);
// litags[0].style.color="red";
// litags[1].innerText = "Have to cook";


// querySelector()
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));


// console.log(document.querySelector("li"));
// document.querySelector("li").style.color="red";
// document.querySelector("ul li").style.color="blue";
// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-child(even)").style.background ="grey";
// document.querySelector("ul li:last-of-type").style.color="green";
// document.querySelector("ul li:nth-of-type(3)").textContent="Have to read";


let listitems = document.querySelector("ul").querySelector(".list-group-item"); //result = first li
 	listitems = document.querySelector("ul").getElementsByClassName("list-group-item"); //HTMLCollection
// console.log(listitems);
// console.log(listitems[3]);
// console.log(typeof listitems);


let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem,idx){
	// console.log(arritem);

	// arritem.textContent = "Hello";

// 	arritem.innerText = `${idx} : Hello`;
// });




// querySelectorAll
let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its);


let itms = document.querySelectorAll("ul.list-group li.list-group-item"); //Nodelist
// console.log(itms);
// console.log(itms[3]);

// itms.forEach(function(itm,idx){
	// console.log(itm);
	// itm.textContent = "Hello";
// 	itm.innerText = `${idx} : Hello World`;
// });


const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);
const lievens = document.querySelectorAll("li:nth-child(even)");
// console.log(lievens);

liodds.forEach(function(liodd,idx){
	// console.log(liodd);
	liodd.style.backgroundColor = "grey";
});



for(let i=0;i < lievens.length; i++){
	// console.log(i);

	// console.log(lievens[i]);

	lievens[i].style.background = "silver";
}


// children

let chl;

const getul = document.querySelector("ul.list-group");
// console.log(getul);
const getli  = document.querySelector("li.list-group-item:first-child");
// console.log(getli);


chl = getul.children; //HTML Collection
// console.log(chl);
// console.log(chl[3]);


// getul.children[1].innerText = "Have to eat";
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item"><i class="far fa-trash-alt"></i></a>`;


// children to children

chl = getul.children;
chl = getul.children[1];
chl = getul.children[1].children;
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");
		// ul        li     a  			HTMLCollection
// chl = getul.children[1].children[0].children;
		// ul        li     a  			i
chl = getul.children[1].children[0].children[0];

// console.log(chl);


// First Element Child

// chl = getul.querySelector('li');
chl = getul.firstElementChild;
// console.log(chl);

// Last Element Child
// chl = getul.querySelector("li:last-child");
chl = getul.lastElementChild;
// console.log(chl);


// Child Element Count
chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;
// console.log(chl);



// Parent Element

const getfirstli = document.querySelector("li.list-group-item:first-child");
// console.log(getfirstli);

let par = getfirstli.parentElement;
// console.log(par);




// Next Element Sibling

		// list item 1  list item 2
let sbl = getfirstli.nextElementSibling;
			// list item 1  list item 2
	sbl = getfirstli.nextElementSibling.nextElementSibling;
		// list item 1  list item 2       list item 3      list item 4            list item 5
	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(sbl);


// Previous Element Sibling
		// list item 1 list item 2     list item 3        list item 2
let psbl= getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(psbl);


// 23ES