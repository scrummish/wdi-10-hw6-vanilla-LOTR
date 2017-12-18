console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   let middleEarth = document.createElement("section");
   middleEarth.setAttribute("id", "middle-earth")
   console.log(middleEarth)
   // add each land as an `article` tag
   for(let i = 0; i < lands.length; i++){
   		let landArticle = document.createElement("article");
   		console.log(landArticle);
   		landArticle.innerHTML = "<h1>" + lands[i] + "</h1>";
   		document.body.appendChild(landArticle)
   }
   // inside each `article` tag include an `h1` with the name of the land


   // append `middle-earth` to your document `body`
   document.body.appendChild(middleEarth);
};

makeMiddleEarth();
console.log("")

// Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // /html/body/article[1]
   let newUl = document.createElement("ul");
   let path = document.querySelector("article");
   path.appendChild(newUl);
   let pathUl = document.querySelector("ul");

   for(let x = 0; x < hobbits.length; x++){
   	let newli = document.createElement("li");
   	newli.className = "hobbit";
   	newli.innerHTML = hobbits[x];
   	pathUl.appendChild(newli);
   }
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   let divTheRing = document.createElement("div");
   divTheRing.id = "the-ring";
   // give the div a class of `'magic-imbued-jewelry'`
   divTheRing.className = "magic-imbued-jewelry";
   // add the ring as a child of `Frodo`
   let frodo = document.querySelector("li");
   frodo.appendChild(divTheRing);
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};
