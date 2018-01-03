var ingredients = document.getElementsByClassName('recipe-ingredients')[0].children;
console.log(ingredients);
var body = document.querySelectorAll('body')[0];
var container = document.getElementById('container');
var header = document.getElementById('siteNavMount');
var recipeTitle = document.getElementsByClassName('recipe-title')[0].textContent.trim();
var servings = document.getElementsByClassName('recipe-time-yield')[0].children[0].children[1].textContent;
var directions = document.getElementsByClassName('recipe-steps')[0].children;

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
var bnch = "bunch";
var clv = "clove";
var clvs = "cloves";
var sprgs = "sprigs";
var sprg = "sprig";
var pcs = "pieces";
var pc = "piece";
var sls = "slices";
var sl = "slice";
var sqOf = "Squeeze of";
var jOf = "Juice of";


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
		// case clvs:
			// return "clvs";
		case sprgs:
			return "sprg";
		case sprg:
			return "sprg";
		case pcs:
			return "pcs";
		case pc:
			return "pc";
		case sls:
			return "sl";
		case sl:
			return "sl";
		case sqOf:
			return "sq of";
		case jOf:
			return "j of";
		default:
			return mmt;

	}
}

findMeasurement = function(recipeReq) {

	recipeReq = recipeReq.toUpperCase();

	var mmtArray = [];

	if (recipeReq.includes(tbsps.toUpperCase())) {
		mmtArray.push({mmt: tbsps, index: recipeReq.indexOf(tbsps.toUpperCase())});
	} else if (recipeReq.includes(tbsp.toUpperCase())) {
		mmtArray.push({mmt: tbsp, index: recipeReq.indexOf(tbsp.toUpperCase())});
	} 
	if (recipeReq.includes(tsps.toUpperCase())) {
		mmtArray.push({mmt: tsps, index: recipeReq.indexOf(tsps.toUpperCase())});
	}else if (recipeReq.includes(tsp.toUpperCase())) {
		mmtArray.push({mmt: tsp, index: recipeReq.indexOf(tsp.toUpperCase())});
	}
	if (recipeReq.includes(cs.toUpperCase())) {
		mmtArray.push({mmt: cs, index: recipeReq.indexOf(cs.toUpperCase())});
	} else if (recipeReq.includes(c.toUpperCase())) {
		mmtArray.push({mmt: c, index: recipeReq.indexOf(c.toUpperCase())});
	}
	if (recipeReq.includes(ozs.toUpperCase())) {
		mmtArray.push({mmt: ozs, index: recipeReq.indexOf(ozs.toUpperCase())});
	} else if (recipeReq.includes(oz.toUpperCase())) {
		mmtArray.push({mmt: oz, index: recipeReq.indexOf(oz.toUpperCase())});
	}
	if (recipeReq.includes(sm.toUpperCase())) {
		mmtArray.push({mmt: sm, index: recipeReq.indexOf(sm.toUpperCase())});
	}
	if (recipeReq.includes(med.toUpperCase())) {
		mmtArray.push({mmt: med, index: recipeReq.indexOf(med.toUpperCase())});
	}
	if (recipeReq.includes(lg.toUpperCase())) {
		mmtArray.push({mmt: lg, index: recipeReq.indexOf(lg.toUpperCase())});
	}
	if (recipeReq.includes(lbs.toUpperCase())) {
		mmtArray.push({mmt: lbs, index: recipeReq.indexOf(lbs.toUpperCase())});
	} else if (recipeReq.includes(lb.toUpperCase())) {
		mmtArray.push({mmt: lb, index: recipeReq.indexOf(lb.toUpperCase())});
	}
	if (recipeReq.includes(g.toUpperCase())) {
		mmtArray.push({mmt: g, index: recipeReq.indexOf(g.toUpperCase())});
	}
	if (recipeReq.includes(pnch.toUpperCase())) {
		mmtArray.push({mmt: pnch, index: recipeReq.indexOf(pnch.toUpperCase())});
	}
	if (recipeReq.includes(inch.toUpperCase())) {
		mmtArray.push({mmt: inch, index: recipeReq.indexOf(inch.toUpperCase())});
	}
	if (recipeReq.includes(bnch.toUpperCase())) {
		mmtArray.push({mmt: bnch, index: recipeReq.indexOf(bnch.toUpperCase())});
	}
	if (recipeReq.includes(sprgs.toUpperCase())) {
		mmtArray.push({mmt: sprgs, index: recipeReq.indexOf(sprgs.toUpperCase())});
	} else if (recipeReq.includes(sprg.toUpperCase())) {
		mmtArray.push({mmt: sprg, index: recipeReq.indexOf(sprg.toUpperCase())});
	}
	if (recipeReq.includes(pcs.toUpperCase())) {
		mmtArray.push({mmt: pcs, index: recipeReq.indexOf(pcs.toUpperCase())});
	} else if (recipeReq.includes(pc.toUpperCase())) {
		mmtArray.push({mmt: pc, index: recipeReq.indexOf(pc.toUpperCase())});
	}
	if (recipeReq.includes(sls.toUpperCase())) {
		mmtArray.push({mmt: sls, index: recipeReq.indexOf(sls.toUpperCase())});
	}
	if (recipeReq.includes(sqOf.toUpperCase())) {
		mmtArray.push({mmt: sqOf, index: recipeReq.indexOf(sqOf.toUpperCase())});
	}
	if (recipeReq.includes(jOf.toUpperCase())) {
		mmtArray.push({mmt: jOf, index: recipeReq.indexOf(jOf.toUpperCase())});
	} 

	var firstMmt, currentLowest;
	console.log(mmtArray);

	if (mmtArray.length <= 0) {
		return "";
	} else {
		currentLowest = recipeReq.length;
		for (var i = 0; i < mmtArray.length; i++) {
			if (mmtArray[i].index <= currentLowest) {
				currentLowest = mmtArray[i].index;
				firstMmt = mmtArray[i].mmt;
			}
		}
		return firstMmt;
	}

}

splitRestOfIngredient = function(splitRest, rest, delimiter) {
	var restArray = rest.split(delimiter);
	splitRest.ingredient = restArray[0].trim();
	for (var i = 1; i < restArray.length; i ++) {
		splitRest.prep = splitRest.prep + restArray[i] + delimiter;	
	}
	if (splitRest.prep.substring(splitRest.prep.length - delimiter.length) == delimiter) {
		splitRest.prep = splitRest.prep.substring(0, splitRest.prep.length - delimiter.length);
	}
	splitRest.prep = splitRest.prep.trim();

	return splitRest;
}

splitIngredient = function(rest) {
	var splitRest = {
		ingredient: "",
		prep: ""
	}
	console.log(rest);

	if (rest) {
		if (rest.substring(0,1) == "(") {
			console.log(rest);
			rest = rest.replace(/(\([0-9]+ (grams)?(ml\.)?\))/, "");
		}
		if (rest.includes(", for")) {
			splitRestOfIngredient(splitRest, rest, ", for");
			splitRest.prep = "for " + splitRest.prep;
		} else if (rest.includes("(")) {
			splitRestOfIngredient(splitRest, rest, "(");
			splitRest.prep = "(" + splitRest.prep;
		// } else if (rest.includes(" or ")) {
		// 	splitRestOfIngredient(splitRest, rest, "or");
		// 	splitRest.prep = "or " + splitRest.prep;
		} else if (rest.includes(",")) {
			splitRestOfIngredient(splitRest, rest, ",");
		} else {
			splitRest.ingredient = rest;
		}
	}
	return splitRest;
}

removeGrams = function(ingredient) {
	if (ingredient.includes("grams") || ingredient.includes("milliliters")) {
		return ingredient.replace(/(\/[0-9]+ (grams)?(milliliters)?)/, "");	
	} else if (ingredient.substring(0,2) == "of") {
		return ingredient.replace("of", "").trim();	
	} else {
		return ingredient;
	}
	
}

parseReq = function(recipeReq) {
	recipeReqObj = {
		quantity: "",
		measurement: "",
		ingredient: "",
		prep: ""
	}
	// matches: 4, 1/2 (unicode), 10-15
	var quantity = recipeReq.replace(/(^[0-9 ]*([\xbc\xbd\xbe\u2153\u2154\u215B])?(-\d+)?(to \d+)?(or \d+)?)(.+$)/i,'$1');

	recipeReqObj.quantity = (quantity != recipeReq ? quantity : "");

	recipeReqObj.measurement = findMeasurement(recipeReq);

	var rest;
	if (recipeReqObj.measurement) {
		rest = recipeReq.split(recipeReqObj.measurement)[1];
		if (rest) {rest = rest.trim()}
	} else if (recipeReqObj.quantity) {
		rest = recipeReq.split(recipeReqObj.quantity)[1].trim();
	} else {
		rest = recipeReq.trim();
	}
	var splitRest = splitIngredient(rest);
	console.log(splitRest);
	recipeReqObj.ingredient = removeGrams(splitRest.ingredient);
	recipeReqObj.prep = splitRest.prep;
	if (recipeReqObj.quantity.includes("to")) {
		recipeReqObj.quantity = recipeReqObj.quantity.replace(" to ", "-");
	} else if (recipeReqObj.quantity.includes("or")) {
		recipeReqObj.quantity = recipeReqObj.quantity.replace(" or ", "-");
	}
	recipeReqObj.measurement = replaceMeasurement(recipeReqObj.measurement);


	console.log(recipeReqObj);

	return recipeReqObj;
}

function getDifference2(string_a, string_b) {

	if (!string_a) {
		return string_b;
	}

	var first_occurance = string_b.indexOf(string_a);
 
   	string_a_length = string_a.length;

   	if (first_occurance == 0) {
     	new_string = string_b.substring(string_a_length);
   	} else {
     	new_string = string_b.substring(0, first_occurance);
     	new_string += string_b.substring(first_occurance + string_a_length);  
   	}
   
   	return new_string;
}

function replaceCloves(recipeRequirementObj) {
	if (!recipeRequirementObj.measurement && recipeRequirementObj.prep.toUpperCase().includes(clvs.toUpperCase())) {
		recipeRequirementObj.measurement = "clv";
		var diff = getDifference2(clvs, recipeRequirementObj.prep).trim();
		recipeRequirementObj.prep = diff;
	} else if (!recipeRequirementObj.measurement && recipeRequirementObj.prep.toUpperCase().includes(clv.toUpperCase())) {
		recipeRequirementObj.measurement = "clv";
		var diff = getDifference2(clv, recipeRequirementObj.prep).trim();
		recipeRequirementObj.prep = diff;
	}
	return recipeRequirementObj;
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

	var diff;
	if (ingredient && recipeRequirementObj.ingredient) {
		diff = getDifference2(ingredient, recipeRequirementObj.ingredient);	
	}
	
	if (diff) {
		recipeRequirementObj.prep = (recipeRequirementObj.prep ? diff + ", " + recipeRequirementObj.prep : diff);
		recipeRequirementObj.ingredient = ingredient;
		if (recipeRequirementObj.prep.substring(0,1) == "," || recipeRequirementObj.prep.substring(0,1) == ")") {
			recipeRequirementObj.prep = recipeRequirementObj.prep.substring(1).trim();
		}
	}
	if (recipeRequirementObj.prep == " ") {
		recipeRequirementObj.prep = "";
	}
	console.log(recipeRequirementObj);

	recipeRequirementObj = replaceCloves(recipeRequirementObj);

	if (recipeRequirementObj.prep.substring(0,1) == "," || recipeRequirementObj.prep.substring(0,1) == ")") {
		recipeRequirementObj.prep = recipeRequirementObj.prep.substring(1).trim();
	}


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

	ingredient = "";
	diff = "";
	prep = "";
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);

var commonIngredients = ["salt", "pepper", "mixture", "juice", "liquid", "water"];


for (var i = 0; i < directions.length; i++) {
	// var direction = document.createElement('div');
	var step = directions[i].outerHTML;
	

	for (var j = 0; j < ingredientsList.length; j++) {
		var ingredient = ingredientsList[j], ingredientSplit;
		if (ingredient.includes(" ")) {
			ingredientSplit = ingredient.split(" ");
			for (var k = 0; k < ingredientSplit.length; k++) {
				if (step.includes(ingredientSplit[k])) {
					step = step.replace(new RegExp('\\b' + ingredientSplit[k] + '\\b', 'gi'), "<b>" + ingredientSplit[k] + "</b>");
				}
			}
		} else {
			if (step.includes(ingredient)) {
				step = step.replace(new RegExp('\\b' + ingredient + '\\b', 'gi'), "<b>" + ingredient + "</b>");
			}
		}
		
	}

	for (var j = 0; j < commonIngredients.length; j++) {
		var ingredient = commonIngredients[j];
		if (step.includes(ingredient)) {
				step = step.replace(new RegExp('\\b' + ingredient + '\\b', 'gi'), "<b>" + ingredient + "</b>");
			}
	}

	if (step.includes("minute")) {
		step = step.replace(/(minute)(s)?/g, "min");	
	}
	
	// step = step.replace(/tofu/g,'<b>tofu</b>');
	// var directionNode = document.createTextNode(step);
	var direction = document.createElement('div');
	direction.innerHTML = step;
	direction.style.fontSize = "3em";
	direction.style.fontWeight = "200";
	// direction.appendChild(directionNode);
	body.appendChild(direction);

	var lineBreak = document.createElement('br');
	body.appendChild(lineBreak);
	continue;
}

console.log(ingredientsList);



