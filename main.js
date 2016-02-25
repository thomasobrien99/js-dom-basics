var firstParagraph = document.getElementById('main');
console.log(firstParagraph);
firstParagraph.innerText = "changed!";

var allUnorderedLists = document.getElementsByTagName('ul');
console.log(allUnorderedLists);

var firstUnorderedList = allUnorderedLists[0];
console.log(firstUnorderedList);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for(var i = 0; i < allListItems.length; i++) {
	console.log(allListItems[i].innerText);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = evenElements[0];
console.log(firstEvenElement);

var firstoddElement = oddElements[0];
console.log(firstoddElement);

var main = document.querySelector('#main');
console.log(main);

var firstoddElement = document.querySelector('.odd');
console.log(firstoddElement);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

console.log(document.childNodes);

document.getElementById('main').style.backgroundColor = "goldenrod";

var li = document.createElement('li');
console.log(li);

li.innerText = "another list item";
console.log(li);

firstUnorderedList.appendChild(li);
console.log(firstUnorderedList);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
firstUnorderedList.insertBefore(anotherListElement, firstUnorderedList.firstChild);
console.log(allListItems);