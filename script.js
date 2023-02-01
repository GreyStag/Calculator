const buttons = document.getElementsByClassName('btn');

let a = ""
let b = ""
let c = ""
for (const btn of buttons){btn.addEventListener('click', e => {
    let text = e.target.id;
    
    if(text == 0 || text == 1 || text == 2 || text == 3 || text == 4 || text == 5 || text == 6 || text == 7 || text == 8 || text == 9 || text == ".") {
        a += text
        console.log(a)
    }

    if (text == "ac"){
        console.log("All Clear")
    }
    else if (text == "%"){
        modulo(a)
    }
    else if (text == "/"){
        divide(a)
    }
    else if (text == "x"){
        multiply(a)
    }
    else if (text == "-"){
        subtract(a)
    }
    else if (text == "+"){
        addition(a)
    }


    else if (text == "="){
        console.log("equals")
    }
    else if (text == "."){
        console.log("period")
    }
});
}


const addition = function(a){
    let addNum = []
    for (const btn of buttons){btn.addEventListener('click', e => {
        let text = e.target.id;
    
        if(text == 0 || text == 1 || text == 2 || text == 3 || text == 4 || text == 5 || text == 6 || text == 7 || text == 8 || text == 9 || text == ".") {
        b += text
        console.log(b)}
        
        if (text == "="){
            let addNum = (+a + +b)
            console.log(addNum)
        }
    })}
    return  addNum
}

const subtract = function(a){
    let subNum =[]
    for (const btn of buttons){btn.addEventListener('click', e => {
        let text = e.target.id;
    
        if(text == 0 || text == 1 || text == 2 || text == 3 || text == 4 || text == 5 || text == 6 || text == 7 || text == 8 || text == 9 || text == ".") {
        b += text
        console.log(b)}
        

        if (text == "="){
            subNum = (+a - +b)
            console.log(subNum)
        }
    })}
    return subNum
}

const multiply = function(a){
    let multiNum =[]
    for (const btn of buttons){btn.addEventListener('click', e => {
        let text = e.target.id;
    
        if(text == 0 || text == 1 || text == 2 || text == 3 || text == 4 || text == 5 || text == 6 || text == 7 || text == 8 || text == 9 || text == ".") {
        b += text
        console.log(b)}
        

        if (text == "="){
            multiNum = (+a * +b)
            console.log(multiNum)
        }
    })}
    return multiNum
}

const divide = function(a){
    let divideNum =[]
    for (const btn of buttons){btn.addEventListener('click', e => {
        let text = e.target.id;
    
        if(text == 0 || text == 1 || text == 2 || text == 3 || text == 4 || text == 5 || text == 6 || text == 7 || text == 8 || text == 9 || text == ".") {
        b += text
        console.log(b)}
        

        if (text == "="){
            divideNum = (+a / +b)
            console.log(divideNum)
        }
    })}
    return divideNum
}

const modulo = function(a){
    let moduNum =[]
    for (const btn of buttons){btn.addEventListener('click', e => {
        let text = e.target.id;
    
        if(text == 0 || text == 1 || text == 2 || text == 3 || text == 4 || text == 5 || text == 6 || text == 7 || text == 8 || text == 9 || text == ".") {
        b += text
        console.log(b)}
        

        if (text == "="){
            moduNum = (+a - +b)
            console.log(moduNum)
        }
    })}
    return moduNum
}