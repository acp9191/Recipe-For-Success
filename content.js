var ingredients = document.getElementsByClassName('recipe-ingredients')[0].children;
console.log(ingredients);
var body = document.querySelectorAll('body')[0];
var container = document.getElementById('container');
var header = document.getElementById('siteNavMount');
var recipeTitle = document.getElementsByClassName('recipe-title')[0].textContent.trim();
var subtitles = document.getElementsByClassName('recipe-yield-value');
var directions = document.getElementsByClassName('recipe-steps')[0].children;

container.style.display = "none";
header.style.display = "none";
body.style.background = "white";

var title = document.createElement('div');
title.classList.add("new-recipe-title");
var titleNode = document.createTextNode(recipeTitle);
title.appendChild(titleNode);
body.appendChild(title);

var timeElement = document.createElement('div');
timeElement.classList.add("new-recipe-subtitle");
var timeNode = document.createTextNode(subtitles[1].textContent);
timeElement.appendChild(timeNode);
title.appendChild(timeElement);

var servingsElement = document.createElement('div');
servingsElement.classList.add("new-recipe-subtitle");
var servingsNode = document.createTextNode(subtitles[0].textContent);
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
var zstOf = "Zest of";
var sprngs = "springs";
var sprng = "spring";
var qts = "quarts";
var qt = "quart";
var hndfl = "handful";
var stlks = "stalks";
var stlk = "stalk";


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
		case zstOf:
			return "zst of";
		case sprng:
			return "sprng";
		case sprngs:
			return "sprngs";
		case qts:
			return "qt";
		case qt:
			return "qt";
		case hndfl:
			return "hndfl";
		default:
			return mmt;

	}
}
addToMmtArray = function(mmtArray, mmt, recipeReq, mmtUpper) {
	return mmtArray.push({mmt: mmt, index: recipeReq.indexOf(mmtUpper)});
}

findMeasurement = function(recipeReq) {

	recipeReq = recipeReq.toUpperCase();
	var tbspsUpper = tbsps.toUpperCase();
	var tbspUpper = tbsp.toUpperCase();
	var tspsUpper = tsps.toUpperCase();
	var tspUpper = tsp.toUpperCase();
	var csUpper = cs.toUpperCase();
	var cUpper = c.toUpperCase();
	var ozsUpper = ozs.toUpperCase();
	var ozUpper = oz.toUpperCase();
	var smUpper = sm.toUpperCase();
	var medUpper = med.toUpperCase();
	var lgUpper = lg.toUpperCase();
	var lbsUpper = lbs.toUpperCase();
	var lbUpper = lb.toUpperCase();
	var gUpper = g.toUpperCase();
	var pnchUpper = pnch.toUpperCase();
	var inchUpper = inch.toUpperCase();
	var bnchUpper = bnch.toUpperCase();
	var sprgsUpper = sprgs.toUpperCase();
	var sprgUpper = sprg.toUpperCase();
	var pcsUpper = pcs.toUpperCase();
	var pcUpper = pc.toUpperCase();
	var slsUpper = sls.toUpperCase();
	var sqOfUpper = sqOf.toUpperCase();
	var jOfUpper = jOf.toUpperCase();
	var zstOfUpper = zstOf.toUpperCase();
	var sprngsUpper = sprngs.toUpperCase();
	var sprngUpper = sprng.toUpperCase();
	var qtsUpper = qts.toUpperCase();
	var qtUpper = qt.toUpperCase();
	var hndflUpper = hndfl.toUpperCase();

	var mmtArray = [];

	if (recipeReq.includes(tbspsUpper)) {
		addToMmtArray(mmtArray, tbsps, recipeReq, tbspsUpper);
	} else if (recipeReq.includes(tbspUpper)) {
		addToMmtArray(mmtArray, tbsp, recipeReq, tbspUpper);
	} 
	if (recipeReq.includes(tspsUpper)) {
		addToMmtArray(mmtArray, tsps, recipeReq, tspsUpper);
	} else if (recipeReq.includes(tspUpper)) {
		addToMmtArray(mmtArray, tsp, recipeReq, tspUpper);
	}
	if (recipeReq.includes(csUpper)) {
		addToMmtArray(mmtArray, cs, recipeReq, csUpper);
	} else if (recipeReq.includes(c.toUpperCase())) {
		addToMmtArray(mmtArray, c, recipeReq, cUpper);
	}
	if (recipeReq.includes(ozsUpper)) {
		addToMmtArray(mmtArray, ozs, recipeReq, ozsUpper);
	} else if (recipeReq.includes(ozUpper)) {
		addToMmtArray(mmtArray, oz, recipeReq, ozUpper);
	}
	if (recipeReq.includes(smUpper)) {
		addToMmtArray(mmtArray, sm, recipeReq, smUpper);
	}
	if (recipeReq.includes(medUpper)) {
		addToMmtArray(mmtArray, med, recipeReq, medUpper);
	}
	if (recipeReq.includes(lgUpper)) {
		addToMmtArray(mmtArray, lg, recipeReq, lgUpper);
	}
	if (recipeReq.includes(lbsUpper)) {
		addToMmtArray(mmtArray, lbs, recipeReq, lbsUpper);
	} else if (recipeReq.includes(lb.toUpperCase())) {
		addToMmtArray(mmtArray, lb, recipeReq, lbUpper);
	}
	if (recipeReq.includes(gUpper)) {
		addToMmtArray(mmtArray, g, recipeReq, gUpper);
	}
	if (recipeReq.includes(pnchUpper)) {
		addToMmtArray(mmtArray, pnch, recipeReq, pnchUpper);
	}
	if (recipeReq.includes(inchUpper)) {
		addToMmtArray(mmtArray, inch, recipeReq, inchUpper);
	}
	if (recipeReq.includes(bnchUpper)) {
		addToMmtArray(mmtArray, bnch, recipeReq, bnchUpper);
	}
	if (recipeReq.includes(sprgsUpper)) {
		addToMmtArray(mmtArray, sprgs, recipeReq, sprgsUpper);
	} else if (recipeReq.includes(sprgUpper)) {
		addToMmtArray(mmtArray, sprg, recipeReq, sprgUpper);
	}
	if (recipeReq.includes(pcsUpper)) {
		addToMmtArray(mmtArray, pcs, recipeReq, pcsUpper);
	} else if (recipeReq.includes(pcUpper)) {
		addToMmtArray(mmtArray, pc, recipeReq, pcUpper);
	}
	if (recipeReq.includes(slsUpper)) {
		addToMmtArray(mmtArray, sls, recipeReq, slsUpper);
	}
	if (recipeReq.includes(sqOfUpper)) {
		addToMmtArray(mmtArray, sqOf, recipeReq, sqOfUpper);
	}
	if (recipeReq.includes(jOfUpper)) {
		addToMmtArray(mmtArray, jOf, recipeReq, jOfUpper);
	}
	if (recipeReq.includes(zstOfUpper)) {
		addToMmtArray(mmtArray, zstOf, recipeReq, zstOfUpper);
	} 
	if (recipeReq.includes(qtsUpper)) {
		addToMmtArray(mmtArray, qts, recipeReq, qtsUpper);
	} else if (recipeReq.includes(qtUpper)) {
		addToMmtArray(mmtArray, qt, recipeReq, qtUpper);
	}
	if (recipeReq.includes(hndflUpper)) {
		addToMmtArray(mmtArray, hndfl, recipeReq, hndflUpper);
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
tbl.classList.add("ingredients-table");
var tblBody = document.createElement("tbody");

// creating all cells
for (var i = 0; i < ingredients.length; i++) {

	var quantity = ingredients[i].children[0].textContent.trim();

	var childNodes = ingredients[i].children[1].childNodes;
	
	var pre = childNodes[0].textContent.trim();

	var ingredient, post;
	if (childNodes[1]) {
		ingredient = childNodes[1].textContent;
		console.log("ingredient:", ingredient);
	}
	if (childNodes[2]) {
		post = childNodes[2].textContent.trim();
	}

	var recipeRequirement = (quantity ? quantity + " " : "") 
		+ (pre ? pre + " " : "")
		+ ingredient
		+ (post ? post : "");
	console.log(recipeRequirement);

	recipeRequirementObj = parseReq(recipeRequirement);

	var diff;
	if (ingredient && recipeRequirementObj.ingredient) {
		diff = getDifference2(ingredient, recipeRequirementObj.ingredient);	
	}
	
	if (diff) {
		console.log("diff:", diff);
		recipeRequirementObj.prep = (recipeRequirementObj.prep ? diff + ", " + recipeRequirementObj.prep : diff);
		recipeRequirementObj.ingredient = ingredient;
		if (recipeRequirementObj.prep.includes(" , ")) {
			recipeRequirementObj.prep = recipeRequirementObj.prep.replace(" , ", ", ");
		}
		var firstChar = recipeRequirementObj.prep.substring(0,1);
		if (firstChar == "," ||
			firstChar == ")" ||
			firstChar == "(") {
			recipeRequirementObj.prep = recipeRequirementObj.prep.substring(1).trim();
		}
	}
	if (recipeRequirementObj.prep == " ") {
		recipeRequirementObj.prep = "";
	}

	console.log(recipeRequirementObj);
	ingredientsList.push(recipeRequirementObj.ingredient);

	recipeRequirementObj = replaceCloves(recipeRequirementObj);

	if (recipeRequirementObj.prep.substring(0,1) == "," || recipeRequirementObj.prep.substring(0,1) == ")") {
		recipeRequirementObj.prep = recipeRequirementObj.prep.substring(1).trim();
	}


	// creates a table row
	var row = document.createElement("tr");
	row.classList.add("requirement-row");

	var quantityCell = document.createElement("td");
	quantityCell.classList.add("quantity-cell");
	if (!recipeRequirementObj.quantity && !recipeRequirementObj.measurement) {
		recipeRequirementObj.quantity = ".";
		quantityCell.style.color = "white";
	}
	var quantityCellText = document.createTextNode(recipeRequirementObj.quantity);
	quantityCell.appendChild(quantityCellText);
	row.appendChild(quantityCell);

	var preCell = document.createElement("td");
	preCell.classList.add("measurement");
	var preCellText = document.createTextNode(recipeRequirementObj.measurement);
	preCell.appendChild(preCellText);
	row.appendChild(preCell);

	var ingredientCell = document.createElement("td");
	ingredientCell.classList.add("ingredient");
	var ingredientCellText = document.createTextNode(recipeRequirementObj.ingredient);
	ingredientCell.appendChild(ingredientCellText);
	row.appendChild(ingredientCell);

	if (recipeRequirementObj.prep) {
		var postCell = document.createElement("span");
		var postCellText = document.createTextNode(recipeRequirementObj.prep);
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

var commonIngredients = [
	"salt", 
	"pepper", 
	"mixture", 
	"lemon", 
	"juice", 
	"liquid", 
	"water", 
	"meat", 
	"beef", 
	"steak", 
	"pasta", 
	"chicken", 
	"soup",
	"cheese",
	"herbs",
	"vegetables",
	"dough",
	"panko",
	"meatballs",
	"sauce"];

var newDirections = document.createElement('ul');
newDirections.classList.add("new-directions");
body.appendChild(newDirections);

function boldIngredient(step, ingredient) {
	return step.replace(new RegExp('\\b' + ingredient + '\\b', 'gi'), "<b>" + ingredient + "</b>");
}

for (var i = 0; i < directions.length; i++) {
	var step = directions[i].outerHTML;

	for (var j = 0; j < ingredientsList.length; j++) {
		var ingredient = ingredientsList[j], ingredientSplit;
		if (ingredient.includes(" ")) {
			ingredientSplit = ingredient.split(" ");
			for (var k = 0; k < ingredientSplit.length; k++) {
				var ingredient = ingredientSplit[k];
				var ingredientLowerCase = ingredient.toLowerCase();
				if (ingredient == 'or' ||
					ingredient == 'and' ||
					ingredient == 'to' ||
					ingredient == 'a' ||
					ingredient == 'of') {
					continue;
				}
				if (step.includes(ingredient)) {
					step = boldIngredient(step, ingredient);
				} else if (step.includes(ingredientLowerCase)) {
					step = boldIngredient(step, ingredientLowerCase);
				}
			}
		} else {
			var ingredientLowerCase = ingredient.toLowerCase();
			if (step.includes(ingredient)) {
				step = boldIngredient(step, ingredient);
			} else if (step.includes(ingredientLowerCase)) {
				step = boldIngredient(step, ingredientLowerCase);
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

	if (step.match(new RegExp(/(\d{3} degrees)/))) {
		step = step.replace(new RegExp(/(\d{3}) (degrees)?/), "<b>$1</b>");
	}
	
	var direction = document.createElement('div');
	direction.classList.add("direction");
	direction.innerHTML = step;
	newDirections.appendChild(direction);
}

console.log(ingredientsList);



