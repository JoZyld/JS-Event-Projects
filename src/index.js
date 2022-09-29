//Name: Joseph Matos-Aldea
//Due Date: 
// JavaScript Event
//the purpose of the program is to play and test with the 3 differents event that JavaScript have (MouseOver, MouseOut, OnClick).

//Im Identifying the text that are gonna be changing the text color and font by using an event and connecting it to a function.
let CT1Over = document.getElementById("CT1").onmouseover = function() {changeColor()};
let CT1Out = document.getElementById("CT1").onmouseout = function() {changeColorBack()};
let CT2Over = document.getElementById("CT2").onmouseover = function() {changeColor()};
let CT2Out = document.getElementById("CT2").onmouseout = function() {changeColorBack()};
let CT3Over = document.getElementById("CT3").onmouseover = function() {changeColor()};
let CT3Out = document.getElementById("CT3").onmouseout = function() {changeColorBack()};
let CT4Over = document.getElementById("CT4").onmouseover = function() {changeColor()};
let CT4Out = document.getElementById("CT4").onmouseout = function() {changeColorBack()};
let CT5Over = document.getElementById("CT5").onmouseover = function() {changeColor()};
let CT5Out = document.getElementById("CT5").onmouseout = function() {changeColorBack()};
let CT6Over = document.getElementById("CT6").onmouseover = function() {changeColor()};
let CT6Out = document.getElementById("CT6").onmouseout = function() {changeColorBack()};

let previousColor = '';

//This function will run to change the text to what they was before
function timer(){
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById("header").innerHTML = "JavaScript Events";
    document.getElementById("header").fontFamily = 'verdana';
    document.getElementById("header").style.color = 'white';
    document.getElementById("CT5").innerHTML = 'Press button Number 5';
    document.getElementById("CT5").style.color = 'white';
    document.getElementById("text1").innerHTML = 'Click the button for a surpise';
    document.getElementById("BtnCT2").innerHTML = "Button";
}

//this function will change the text color and text font
function changeColor(clr, id, font){
   document.getElementById(id).style.color = clr;
   document.getElementById(id).style.fontFamily = font;
}

//this function will change the text color and font to what they was before
function changeColorBack(clr, id, font){
    document.getElementById(id).style.color = clr;
    document.getElementById(id).style.fontFamily = font;
}

//this is gonna run for the onclick event and it will check if the id of the button is equal to the id that out for the button that have the following id
function buttonEvent(id, id2, textId, text, color){
    if (id == 'CT1'){
        if (document.getElementById(id2).style.backgroundColor != color) {
            document.getElementById(id2).style.backgroundColor = color;
            document.getElementById(textId).innerHTML = text;
        }
        else {
            document.getElementById(id2).style.backgroundColor = '#dc3545';
            document.getElementById("text1").innerHTML = 'Click the button for a surpise';
        }
    }
    if (id == 'CT2'){
        document.getElementById("BtnCT2").innerHTML = "Hello There";
        setTimeout(timer, 2000) //this will run the funtion by waiting 2 sec before running it
    }
    if (id == 'CT3'){
        document.getElementById('body').style.backgroundColor = 'blue';
        setTimeout(timer, 1000)
    }
    if (id == 'CT4'){
        document.getElementById("header").innerHTML = "NOPE";
        document.getElementById("header").fontFamily = 'fantasy';
        document.getElementById("header").style.color = 'blueviolet';
        setTimeout(timer, 2000)
    }
    if (id == 'CT5'){
        document.getElementById(id).innerHTML = 'Warning dont press button number 6';
        document.getElementById(id).style.color = 'yellow';
        setTimeout(timer, 2000)
    }
    if (id == "CT6"){
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
    }  
}