var counter = 0;
var symbols = [];
var normalSymbolTime = 500;
var checkSymbolTime = 2000;

var greenTimeID;
var timesAfterSkip;
var dataForm = '[]';
var startTime;

function updateDataForm(action, position, time){
    var obj = JSON.parse(dataForm);
    obj.push({"correct":getResult(action, position), "position":position, "time":time});
    dataForm = JSON.stringify(obj);
}

function removeLastObjectOfDataForm(){
    var obj = JSON.parse(dataForm);
    obj.pop();
    dataForm = JSON.stringify(obj);
}

function getResult(action, position){
    if(action == 0 && position == 8)
        return 1;
    else if (action == 1 && position < 8)
        return 1;
    else if(action == -1)
        return -1;
    else 
        return 0;
}

function updateSymbolBox(){
    $("#symbolBox").text(symbols[counter]); 
    counter++;
}

function showWebElements(test){
    $("#symbolBox").hide();
    switch(test){
        case "firstPractice": {
            $("#firstTestInstruction").show();
            $("#goToFirstTest").show();
            break;
        }
        case "firstTest": {
            $("#secondPracticeInstruction").show();
            $("#goToSecondPractice").show();
            break;
        }
        case "secondPractice": {
            $("#secondTestInstruction").show();
            $("#goToSecondTest").show();
            break;
        }        
        case "secondTest": {
            $.post("/sternbergTest.html", dataForm, dataType="json")
            .done(function(data){
                console.log("Posted.");
            })
            .fail(function() {
                console.log("Error");
            })
            .always(function() {
                console.log("Finished");
            });

            $("#finishMessage").show();
            break;        
        }
        default: console.log("case error");
    }
}

function isCheckSymbol(type, tick){
    switch(type){
        case "firstPractice": {
            return ((tick-1)%10 == 0);
            break;
        }
        case "firstTest": {
            return ((tick-1)%10 == 0);
            break;
        }
        case "secondPractice": {
            return (((tick-2)%11 == 0 )|| (tick-1)%11 == 0);
            break;
        }        
        case "secondTest": {
            return (((tick-2)%11 == 0 )|| (tick-1)%11 == 0);
            break;     
        }
        default: console.log("case error");
    }
}

function keyListener(type){
    updateDataForm(-1,-1,-1);
    var keyCode;
    var f = false
    $(document).on("keyup", function(event){
        var position = positions.shift();
        keyCode = event.which;
        if (keyCode == 40){
            removeLastObjectOfDataForm();
            updateDataForm(0, position, performance.now() - startTime);
            skip(type);
        }
        else if (keyCode == 38){
            removeLastObjectOfDataForm();
            updateDataForm(1, position, performance.now() - startTime);
            skip(type);
        }
    });
}

function skip(type){
    clearTimeout(greenTimeID);
    doSternbergTest(updateSymbolBox, timesAfterSkip, type);
    $("#symbolBox").text(" ");
}

function doSternbergTest(callback, times, typeOfTest){
    var internalCallback = function(tick, type){
        return function(){
            tick--; 
                if (tick == 0){
                    showWebElements(type);
                }
                else if (isCheckSymbol(type, tick)){
                    $(document).off();
                    startTime = window.performance.now();
                    greenTimeID = window.setTimeout(internalCallback, checkSymbolTime);
            		    $("#symbolBox").css("color", "green");
                    timesAfterSkip = tick; 
                    callback();
                    keyListener(type);
                }
                else if (tick > 0){
                    window.setTimeout(internalCallback, normalSymbolTime);
                    $("#symbolBox").css("color", "black");
                    callback();
                    $(document).off();
                }
        }
    }(times, typeOfTest);
    window.setTimeout(internalCallback, 0);
}
