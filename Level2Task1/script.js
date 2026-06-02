const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error";
    }

}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

    const key = event.key;

    // Allow numbers
    if(!isNaN(key)){
        appendValue(key);
    }

    // Allow operators
    else if(
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ){
        appendValue(key);
    }

    // Enter = calculate
    else if(key === "Enter"){
        calculate();
    }

    // Backspace = delete
    else if(key === "Backspace"){
        deleteLast();
    }

    // Escape = clear
    else if(key === "Escape"){
        clearDisplay();
    }

});
