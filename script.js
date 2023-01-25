const buttons = document.getElementsByClassName('btn');


for (const btn of buttons){btn.addEventListener('click', e => {
    let text = e.target.id;

    if (text == "ac"){
        console.log("All Clear")
    }
    else if (text == "%"){
        console.log("modulo")
    }
    else if (text == "/"){
        console.log("divide")
    }
    else if (text == "x"){
        console.log("times")
    }
    else if (text == "-"){
        console.log("subtract")
    }
    else if (text == "+"){
        console.log("add")
    }
    else if (text == "="){
        console.log("equals")
    }
    else if (text == "."){
        console.log("period")
    }
    else if (text == "9"){
        console.log("nine")
    }
    else if (text == "8"){
        console.log("eight")
    }
    else if (text == "7"){
        console.log("seven")
    }
    else if (text == "6"){
        console.log("six")
    }
    else if (text == "5"){
        console.log("five")
    }
    else if (text == "4"){
        console.log("four")
    }
    else if (text == "3"){
        console.log("three")
    }
    else if (text == "2"){
        console.log("two")
    }
    else if (text == "1"){
        console.log("one")
    }
    else if (text == "0"){
        console.log("zero")
    }
    console.log(text);
    
    
});
}

const addition = function(a, b){

}

const subtract = function(a, b){

}

const multiply = function(a, b){

}

const divide = function(a, b){

}

const modulo = function(a, b){
    
}