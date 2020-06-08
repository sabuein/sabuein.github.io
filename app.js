// This is a single-line comment.

'use strict';


let today = new Date();
let formatDate = today.toDateString();
let selectDateElement = document.getElementById("date");
selectDateElement.innerHTML = formatDate;

console.log("Attention: You need to enable JavaScript to view the full site.");