var ingredients = document.getElementsByClassName('recipe-ingredients')[0].children;
console.log(ingredients);
// alert(ingredients);
// alert("hello world");
var body = document.querySelectorAll('body')[0];
var container = document.getElementById('container');
var header = document.getElementById('siteNavMount');
var recipeTitle = document.getElementsByClassName('recipe-title')[0].textContent.trim();
var servings = document.getElementsByClassName('recipe-time-yield')[0].children[0].children[1].textContent;

container.style.display = "none";
header.style.display = "none";
body.style.background = "white";

var title = document.createElement('div');
title.style.textAlign = "center";
title.style.fontSize = "4em";
title.style.fontFamily = "nyt-cheltenham";
title.style.margin = "1em";
var titleNode = document.createTextNode(recipeTitle);
title.appendChild(titleNode);
body.appendChild(title);

var servingsElement = document.createElement('div');
servingsElement.style.textAlign = "center";
servingsElement.style.fontSize = ".5em";
var servingsNode = document.createTextNode(servings);
servingsElement.appendChild(servingsNode);
title.appendChild(servingsElement);

var tbsps = "tablespoons";
var tbsp = "tablespoon";
var tsps = "teaspoons";
var tsp = "teaspoon";
var cs = "cups";
var c = "cup";
var ozs = "ounces";
var oz = "ounce";
var lbs = "pounds";
var lb = "pound";
var gs = "grams";
var g = "gram";
var sm = "small";
var med = "medium";
var lg = "large";
var pnch = "Pinch";
var inch = "inch";
var bnch = "bunch"
var clvs = "cloves"


replaceMeasurement = function(mmt) {

	switch(mmt) {
		case tbsps:
			return "T";
		case tbsp:
			return "T";
		case tsps:
			return "t";
		case tsp:
			return "t";
		case cs:
			return "c";
		case c:
			return "c";
		case ozs:
			return "oz";
		case oz:
			return "oz";
		case lbs:
			return "lb";
		case lb:
			return "lb";
		case gs:
			return "gs";
		case g:
			return "g";
		case sm:
			return "sm";
		case med:
			return "med";
		case lg:
			return "lg";
		case pnch:
			return "pnch";
		case inch:
			return "in";
		case bnch:
			return "bnch";
		case clvs:
			return "clvs";
		case "":
			return " ";
		default:
			return mmt;

	}
}

findMeasurement = function(recipeReq) {

	recipeReq = recipeReq.toUpperCase();

	if (recipeReq.toUpperCase().includes(tbsps.toUpperCase())) {
		return tbsps;
	} else if (recipeReq.toUpperCase().includes(tbsp.toUpperCase())) {
		return tbsp;
	} else if (recipeReq.toUpperCase().includes(tsps.toUpperCase())) {
		return tsps;
	} else if (recipeReq.toUpperCase().includes(tsp.toUpperCase())) {
		return tsp;
	} else if (recipeReq.toUpperCase().includes(cs.toUpperCase())) {
		return cs;
	} else if (recipeReq.toUpperCase().includes(c.toUpperCase())) {
		return c;
	} else if (recipeReq.toUpperCase().includes(ozs.toUpperCase())) {
		return ozs;
	} else if (recipeReq.toUpperCase().includes(oz.toUpperCase())) {
		return oz;
	} else if (recipeReq.toUpperCase().includes(sm.toUpperCase())) {
		return sm;
	} else if (recipeReq.toUpperCase().includes(med.toUpperCase())) {
		return med;
	} else if (recipeReq.toUpperCase().includes(lg.toUpperCase())) {
		return lg;
	} else if (recipeReq.toUpperCase().includes(lbs.toUpperCase())) {
		return lbs;
	} else if (recipeReq.toUpperCase().includes(lb.toUpperCase())) {
		return lb;
	} else if (recipeReq.toUpperCase().includes(g.toUpperCase())) {
		return g;
	} else if (recipeReq.toUpperCase().includes(pnch.toUpperCase())) {
		return pnch;
	} else if (recipeReq.toUpperCase().includes(inch.toUpperCase())) {
		return inch;
	} else if (recipeReq.toUpperCase().includes(bnch.toUpperCase())) {
		return bnch;
	} else if (recipeReq.toUpperCase().includes(clvs.toUpperCase())) {
		return clvs;
	} else {
		return "";
	}

}

splitRestOfIngredient = function(splitRest, rest, delimiter) {
	var restArray = rest.split(delimiter);
	splitRest.ingredient = restArray[0].trim();
	splitRest.prep = restArray[1].trim();
	return splitRest;
}

splitIngredient = function(rest) {
	var splitRest = {
		ingredient: "",
		prep: ""
	}
	console.log(rest);

	if (rest) {
		if (rest.includes("(")) {
			splitRestOfIngredient(splitRest, rest, "(");
			splitRest.prep = "(" + splitRest.prep;
		// } else if (rest.includes(" or ")) {
		// 	splitRestOfIngredient(splitRest, rest, "or");
		// 	splitRest.prep = "or " + splitRest.prep;
		} else if (rest.includes(",")) {
			splitRestOfIngredient(splitRest, rest, ",");
		}
		else {
			splitRest.ingredient = rest;
		}
	}
	return splitRest;
}

removeGrams = function(ingredient) {
	return ingredient.replace(/(\/[0-9]+ grams)/, "");
}

parseReq = function(recipeReq) {
	recipeReqObj = {
		quantity: "",
		measurement: "",
		ingredient: "",
		prep: ""
	}
	// matches: 4, 1/2 (unicode), 10-15
	var quantity = recipeReq.replace(/(^[0-9 ]*([\xbc\xbd\xbe\u2153\u2154\u215B])?(-\d+)?(to \d+)?)(.+$)/i,'$1');

	recipeReqObj.quantity = (quantity != recipeReq ? quantity : "");

	recipeReqObj.measurement = findMeasurement(recipeReq);

	var rest;
	if (recipeReqObj.measurement) {
		rest = recipeReq.split(recipeReqObj.measurement)[1];
	} else if (recipeReqObj.quantity) {
		rest = recipeReq.split(recipeReqObj.quantity)[1];
	} else {
		rest = recipeReq;
	}
	var splitRest = splitIngredient(rest);
	console.log(splitRest);
	recipeReqObj.ingredient = splitRest.ingredient;
	recipeReqObj.ingredient = removeGrams(recipeReqObj.ingredient)
	recipeReqObj.prep = splitRest.prep;
	if (recipeReqObj.quantity.includes("to")) {
		recipeReqObj.quantity = recipeReqObj.quantity.replace(" to ", "-")
	}
	recipeReqObj.measurement = replaceMeasurement(recipeReqObj.measurement);


	console.log(recipeReqObj);

	return recipeReqObj;
}

var ingredientsList = [];

var tbl = document.createElement("table");
tbl.style.margin = "2em";
var tblBody = document.createElement("tbody");

// creating all cells
for (var i = 0; i < ingredients.length; i++) {

	var quantity = ingredients[i].children[0].textContent.trim();

	var childNodes = ingredients[i].children[1].childNodes;
	
	var pre = childNodes[0].textContent.trim();

	var ingredient, post;
	if (childNodes[1]) {
		ingredient = childNodes[1].textContent;
		ingredientsList.push(ingredient);
	}
	if (childNodes[2]) {
		post = childNodes[2].textContent.trim();
	}

	var recipeRequirement = (quantity ? quantity + " " : "") 
		+ (pre ? pre + " " : "")
		+ (ingredient ? ingredient + " " : "")
		+ (post ? post : "");
	console.log(recipeRequirement);


	recipeRequirementObj = parseReq(recipeRequirement);

	// creates a table row
	var row = document.createElement("tr");
	row.style.borderBottom = "1px solid black"
	row.style.height = "5em";

	var quantityCell = document.createElement("td");
	quantityCell.style.fontSize = "4em";
	quantityCell.style.padding = "inherit";
	var quantityCellText = document.createTextNode(recipeRequirementObj.quantity);
	quantityCell.appendChild(quantityCellText);
	row.appendChild(quantityCell);

	var preCell = document.createElement("td");
	preCell.style.fontSize = "2.5em";
	preCell.style.fontStyle = "italic";
	preCell.style.padding = ".5em";
	preCell.style.textAlign = "center";
	var preCellText = document.createTextNode(recipeRequirementObj.measurement);
	preCell.appendChild(preCellText);
	row.appendChild(preCell);

	var ingredientCell = document.createElement("td");
	ingredientCell.classList.add("ingredient");
	var ingredientCellText = document.createTextNode(recipeRequirementObj.ingredient);
	ingredientCell.appendChild(ingredientCellText);
	row.appendChild(ingredientCell);

	if (recipeRequirementObj.prep) {
		// post = replaceMeasurements(post);
		var postCell = document.createElement("span");
		var postCellText = document.createTextNode(recipeRequirementObj.prep);
		// ingredientCell.style.textDecoration = "underline";
		postCell.classList.add("tooltip");
		postCell.appendChild(postCellText);
		ingredientCell.appendChild(postCell);
	}

	// add the row to the end of the table body
	tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);

console.log(ingredientsList);



