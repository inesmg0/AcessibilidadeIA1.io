var buttonM = document.getElementById("textM");

buttonM.addEventListener("click", function(){
    console.log("click");
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.fontSize = "23px";
    });
    document.querySelectorAll("h1").forEach(paragraph => {
        paragraph.style.fontSize = "40px";
    });
});

var buttonB = document.getElementById("textB");

buttonB.addEventListener("click", function(){
    console.log("click");
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.fontSize = "30px";
    });
    document.querySelectorAll("h1").forEach(paragraph => {
        paragraph.style.fontSize = "40px";
    });
});


var buttonR = document.getElementById("textR");

buttonR.addEventListener("click", function(){
    console.log("click");
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.fontSize = "16px";
    });
    document.querySelectorAll("h2").forEach(paragraph => {
        paragraph.style.fontSize = "40px";
    });
});