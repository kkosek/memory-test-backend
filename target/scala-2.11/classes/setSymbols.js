const constSymbols = ["A", "B", "C", "D", "E", "F",
                "G", "H", "I", "J", "K", "L",
                "M", "N", "O", "Q", "P", "R",
                "S", "T", "U", "W", "Y", "Z",
                "V", "0", "1", "2", "3", "4",
                "5", "6", "7", "8", "9"];

var positions = [];
var testSymbolsNumber = 8;

function getSymbolsSeries(numberOfSingleSeries, checkSymbols){
	positions = [];
	var sequence = [];
	for(var k = 0; k < numberOfSingleSeries; k++)
		sequence = sequence.concat(getSymbols(checkSymbols));
	sequence.push(" ");
	console.log(sequence);
	return sequence;
}

function getSymbols(checkSymbols){
	var symbols = constSymbols.slice();
	var testSymbols = [];
	var randomIndex;
	var sampleSymbol;

	for (var i = 0; i < testSymbolsNumber; i++){
		randomIndex = Math.floor(Math.random() * symbols.length);
		sampleSymbol = symbols.splice(randomIndex, 1)[0];
		testSymbols.push(sampleSymbol)
	}

	for(var j = 0; j < checkSymbols; j++){
		if(hasSymbolOccured()){
			randomIndex = Math.floor(Math.random() * testSymbolsNumber);
			positions.push(randomIndex);
			testSymbols.push(testSymbols[randomIndex]);
		}
		else{
			randomIndex = Math.floor(Math.random() * symbols.length);
			positions.push(testSymbolsNumber);
			testSymbols.push(symbols[randomIndex]);
		}
	}
	testSymbols.unshift(" ");
	return testSymbols;
}

function hasSymbolOccured(){
	if(Math.random() > 0.333)
		return true;
	else
		return false;
}

