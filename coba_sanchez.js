var cpp = ["C++", "Compiled Languages", "Object Oriented", "Imperative", "Impure Functional", "Functonal", "Declarative", "PL"];
var jvscrpt = ["Javascript", "Client side", "Embeddable languages", "Object Oriented", "Imperative", "PL"];
var py = ["Python", "Object Oriented", "Imperative", "Impure Functional", "Functional", "Declarative", "PL"];
var css = ["CSS", "Scripting", "PL"];
var php = ["PHP", "Scripting", "Server side", "Impure Functional", "Functional", "Declarative", "PL"];
var java = ["Java", "Concurrent Languages", "Compiled Languages", "Object Oriented", "Imperative", "PL"];

function disSanchez(bp1, bp2) {
    let adb = bp1.filter(x => !bp2.includes(x));
    let bda = bp2.filter(x => !bp1.includes(x));
    let anb = bp1.filter(x => bp2.includes(x));
    //return anb.length; 
    return Math.log2(1+(adb.length+bda.length)/(adb.length+bda.length+anb.length));
}

function score(req, talent){
    let temp = [];
    let temp1 = [];
    let hasil = 0;

    for (let i = 0; i < talent.length; i++) {
        for (let j = 0; j < req.length; j++) {
            temp1.push(disSanchez(talent[i],req[j]));
        }
        temp1.sort()
        temp.push(temp1[0]);
        temp1=[];
    }

    //return temp;

    for (let k = 0; k < temp.length; k++){
        hasil = hasil + temp[k]
    }

    return hasil/temp.length;
}

console.log(score([cpp,py],[py,php,java]));