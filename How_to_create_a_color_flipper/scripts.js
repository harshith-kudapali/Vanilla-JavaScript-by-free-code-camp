const colours=[
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "
];
const btn=document.getElementById("click");
const bg=document.querySelector('#color');
btn.addEventListener("click",function (){
    const randNum=getRand();
    document.body.style.backgroundColor=colours[randNum];
    bg.textContent=colours[randNum]; 
});
function getRand(){
    return Math.floor(Math.random()*colours.length);
}