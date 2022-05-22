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
let litags = document.getElementsByTagName('li');
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