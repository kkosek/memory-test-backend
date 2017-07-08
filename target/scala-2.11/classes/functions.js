var practiceSeries = 3;
var testSeries = 60;

$(document).ready(function(){
    $("#symbolBox").hide();
    $("#goToFirstTest").hide();
    $("#goToSecondPractice").hide();
    $("#goToSecondTest").hide();
    $("#firstTestInstruction").hide();
    $("#secondPracticeInstruction").hide();
    $("#secondTestInstruction").hide();
    $("#finishMessage").hide();
});

$(document).ready(function(){
    $("#goToFirstPractice").click(function(){
        $("#firstPracticeInstruction").hide();
        $(this).hide();
        $("#symbolBox").show();
        symbols = getSymbolsSeries(practiceSeries, 1).slice();
        doSternbergTest(updateSymbolBox, symbols.length, "firstPractice");
    });
})

$(document).ready(function(){
    $("#goToFirstTest").click(function(){
        $("#firstTestInstruction").hide();
        $(this).hide();
        $("#symbolBox").show();
        counter = 0;
        symbols = getSymbolsSeries(testSeries, 1).slice();
        doSternbergTest(updateSymbolBox, symbols.length, "firstTest");
    });
});

$(document).ready(function(){
    $("#goToSecondPractice").click(function(){
        $("#secondPracticeInstruction").hide();
        $(this).hide();
        $("#symbolBox").show();
        counter = 0;
        symbols = getSymbolsSeries(practiceSeries, 2).slice();
        doSternbergTest(updateSymbolBox, symbols.length, "secondPractice");
    });
});

$(document).ready(function(){
    $("#goToSecondTest").click(function(){
        $("#secondTestInstruction").hide();
        $(this).hide();
        $("#symbolBox").show();
        counter = 0;
        symbols = getSymbolsSeries(testSeries, 2).slice();
        doSternbergTest(updateSymbolBox, symbols.length, "secondTest");
    });
});
