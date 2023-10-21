function setText(id, text, className) {
	let elem = document.getElementById(id);
   elem.textContent = text;
   elem.classList.add(className);
}


setText('elem1','Sonnet 1 in modern English', 'class1' );
setText('elem2','Sonnet 1: From Fairest Creatures We Desire Increase', 'class2');
