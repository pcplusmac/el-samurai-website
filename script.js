// create a const variable store the action of element creating
const h2 = document.createElement("h2");
h2.id = "reason";
// using this const variable to add the text for the element.
h2.textContent = "This content is added by JS";
h2.innerText = "content add by js innerText";

// add the element and its content to html
document.body.appendChild(h2);
console.log(h2);